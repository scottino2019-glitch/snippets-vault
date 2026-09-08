import { Snippet, SnippetCategory, SnippetType } from '../types';

/**
 * Automatically determine clean readable title from filename or path
 */
export function formatTitleFromFilename(filename: string): string {
  // Remove extension
  const withoutExt = filename.replace(/\.[^/.]+$/, '');
  
  // Format snake_case, kebab-case, or camelCase to words
  const spaced = withoutExt
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim();

  if (!spaced) return 'Snippet Senza Titolo';
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/**
 * Automatically determine category from folder name or file keywords
 */
export function detectCategory(pathOrName: string): SnippetCategory {
  const normalized = pathOrName.toLowerCase();

  if (normalized.includes('button') || normalized.includes('btn') || normalized.includes('pulsant') || normalized.includes('cta')) {
    return 'buttons';
  }
  if (normalized.includes('card') || normalized.includes('sched') || normalized.includes('pricing') || normalized.includes('profile')) {
    return 'cards';
  }
  if (normalized.includes('nav') || normalized.includes('menu') || normalized.includes('sidebar') || normalized.includes('header') || normalized.includes('breadcrumb')) {
    return 'navigation';
  }
  if (normalized.includes('form') || normalized.includes('input') || normalized.includes('modul') || normalized.includes('toggle') || normalized.includes('switch') || normalized.includes('checkbox') || normalized.includes('select')) {
    return 'forms';
  }
  if (normalized.includes('badge') || normalized.includes('pill') || normalized.includes('tag') || normalized.includes('label') || normalized.includes('status')) {
    return 'badges';
  }
  if (normalized.includes('feedback') || normalized.includes('alert') || normalized.includes('toast') || normalized.includes('counter') || normalized.includes('modal') || normalized.includes('notif')) {
    return 'feedback';
  }
  if (normalized.includes('layout') || normalized.includes('hero') || normalized.includes('footer') || normalized.includes('section') || normalized.includes('grid')) {
    return 'layout';
  }

  return 'other';
}

/**
 * Detect snippet tech type (HTML)
 */
export function detectType(_filename: string, _code: string): SnippetType {
  return 'html';
}

/**
 * Extract smart tags from code and metadata
 */
export function extractTags(code: string, category: string, _type: SnippetType, _filename?: string): string[] {
  const tags = new Set<string>([category, 'html']);

  if (code.includes('gradient')) tags.add('gradient');
  if (code.includes('shadow')) tags.add('shadow');
  if (code.includes('dark:')) tags.add('dark-mode');
  if (code.includes('flex')) tags.add('flexbox');
  if (code.includes('grid')) tags.add('grid');
  if (code.includes('animate') || code.includes('transition')) tags.add('animazione');
  if (code.includes('hover:')) tags.add('hover');
  if (code.includes('blur')) tags.add('glassmorphism');
  if (code.includes('<script')) tags.add('interactive');
  if (code.includes('svg') || code.includes('data-lucide')) tags.add('icons');

  return Array.from(tags);
}

/**
 * Parse an HTML file into a full Snippet object
 */
export async function parseFileToSnippet(file: File, relativePath?: string): Promise<Snippet | null> {
  const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
  const validExtensions = ['.html', '.htm', '.svg', '.jsx', '.tsx', '.ts', '.js'];

  if (!validExtensions.includes(ext)) {
    return null;
  }

  let code = await file.text();
  // Auto-convert className to class for immediate HTML compatibility
  code = code.replace(/\bclassName=/g, 'class=');

  const pathForCategory = relativePath || (file as any).webkitRelativePath || file.name;
  const category = detectCategory(pathForCategory);
  const type: SnippetType = 'html';
  const title = formatTitleFromFilename(file.name);
  const tags = extractTags(code, category, type, file.name);

  return {
    id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
    title,
    description: `Caricato da ${relativePath || file.name}`,
    category,
    type,
    tags,
    code,
    path: relativePath ? `/${relativePath}` : undefined,
    isCustom: true,
    favorite: false,
    createdAt: new Date().toISOString().split('T')[0],
  };
}

/**
 * Recursively traverse dropped folder items using WebKit Entry API
 */
export async function scanDroppedItems(dataTransfer: DataTransfer): Promise<Snippet[]> {
  const snippets: Snippet[] = [];

  const traverseFileTree = async (item: any, currentPath = ''): Promise<void> => {
    if (!item) return;

    if (item.isFile) {
      const file: File = await new Promise((resolve, reject) => {
        item.file(resolve, reject);
      });
      const parsed = await parseFileToSnippet(file, currentPath ? `${currentPath}/${file.name}` : file.name);
      if (parsed) {
        snippets.push(parsed);
      }
    } else if (item.isDirectory) {
      const dirReader = item.createReader();
      const entries: any[] = await new Promise((resolve, reject) => {
        dirReader.readEntries(resolve, reject);
      });

      for (const childEntry of entries) {
        await traverseFileTree(childEntry, currentPath ? `${currentPath}/${item.name}` : item.name);
      }
    }
  };

  const items = dataTransfer.items;
  if (items && items.length > 0) {
    const promises: Promise<void>[] = [];
    for (let i = 0; i < items.length; i++) {
      const entry = (items[i] as any).webkitGetAsEntry?.();
      if (entry) {
        promises.push(traverseFileTree(entry, ''));
      }
    }
    await Promise.all(promises);
  } else if (dataTransfer.files && dataTransfer.files.length > 0) {
    for (let i = 0; i < dataTransfer.files.length; i++) {
      const parsed = await parseFileToSnippet(dataTransfer.files[i]);
      if (parsed) snippets.push(parsed);
    }
  }

  return snippets;
}
