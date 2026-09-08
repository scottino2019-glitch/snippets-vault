export type SnippetType = 'html';

export type NeutralTheme = 'warm-neutral' | 'cool-neutral' | 'charcoal-neutral';

export type SnippetCategory = 
  | 'buttons' 
  | 'cards' 
  | 'navigation' 
  | 'forms' 
  | 'badges' 
  | 'feedback' 
  | 'layout' 
  | 'other';

export interface Snippet {
  id: string;
  title: string;
  description?: string;
  category: SnippetCategory;
  type: SnippetType;
  tags: string[];
  code: string;
  path?: string; // e.g. '/snippets/buttons/gradient-button.html'
  isCustom?: boolean;
  favorite?: boolean;
  createdAt: string;
}

export interface SnippetManifest {
  version: string;
  description: string;
  snippets: Omit<Snippet, 'code'>[];
}
