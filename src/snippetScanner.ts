/**
 * Helper to scan and synchronize HTML snippets from the public/snippets folder.
 * Supports both dynamic Vite API middleware and static manifest fallback.
 */

export interface ScannedSnippetFile {
  filePath: string;
  category: string;
  title: string;
  code: string;
}

export interface ScanResult {
  success: boolean;
  files: ScannedSnippetFile[];
  source: 'api' | 'manifest' | 'fallback';
  message?: string;
  error?: string;
}

// Known files in public/snippets directory to ensure reliable discovery even without API
export const KNOWN_PUBLIC_SNIPPETS: { filePath: string; category: string; title: string }[] = [
  { filePath: 'public/snippets/schede/accordion-faq.html', category: 'schede', title: 'Accordion FAQ' },
  { filePath: 'public/snippets/schede/accordion.html', category: 'schede', title: 'Accordion Schede' },
  { filePath: 'public/snippets/schede/profilo-minimale.html', category: 'schede', title: 'Profilo Minimale' },
  { filePath: 'public/snippets/schede/scheda-prodotto.html', category: 'schede', title: 'Scheda Prodotto' },
  { filePath: 'public/snippets/bottoni/pulsante-moderno.html', category: 'bottoni', title: 'Pulsante Moderno' },
  { filePath: 'public/snippets/bottoni/bottone-ardesia-minimale.html', category: 'bottoni', title: 'Bottone Ardesia' },
  { filePath: 'public/snippets/layout/griglia-moderna.html', category: 'layout', title: 'Griglia Moderna' },
  { filePath: 'public/snippets/layout/barra-navigazione.html', category: 'layout', title: 'Barra Navigazione' },
  { filePath: 'public/snippets/animazioni/caricamento-pulsante.html', category: 'animazioni', title: 'Caricamento Pulsante' },
  { filePath: 'public/snippets/animazioni/effetto-testo-fluido.html', category: 'animazioni', title: 'Effetto Testo Fluido' },
  { filePath: 'public/snippets/form/campo-ricerca-animato.html', category: 'form', title: 'Campo Ricerca Animato' },
  { filePath: 'public/snippets/modali/dialog-conferma.html', category: 'modali', title: 'Dialog Conferma' },
  { filePath: 'public/snippets/menu/menu-dropdown-responsive.html', category: 'menu', title: 'Menu Dropdown Responsive' },
  { filePath: 'public/snippets/header/header-app-moderno.html', category: 'header', title: 'Header App Moderno' },
  { filePath: 'public/snippets/hero/hero-landing-moderna.html', category: 'hero', title: 'Hero Landing Moderna' },
];

/**
 * Scan snippets from public folder using multiple fallback layers:
 * 1. Live Dev/Preview Server Middleware (`/api/scan-public-snippets`)
 * 2. Static Manifest (`/snippets/snippets-manifest.json` or `/snippets-manifest.json`)
 * 3. Direct fetch of known snippet files
 */
export async function scanPublicSnippets(): Promise<ScanResult> {
  // 1. Try Dev/Preview Server Endpoint
  try {
    const res = await fetch('/api/scan-public-snippets', {
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await res.json();
        if (data && Array.isArray(data.files) && data.files.length > 0) {
          return {
            success: true,
            files: data.files,
            source: 'api',
            message: `${data.files.length} file trovati tramite server API`,
          };
        }
      }
    }
  } catch {
    // Continue to manifest fallback
  }

  // 2. Try Static Manifest (works in production builds and static hosting)
  const manifestUrls = [
    '/snippets/snippets-manifest.json',
    '/snippets-manifest.json',
  ];

  for (const url of manifestUrls) {
    try {
      const res = await fetch(`${url}?_t=${Date.now()}`);
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json') || url.endsWith('.json')) {
          const data = await res.json();
          if (data && Array.isArray(data.files) && data.files.length > 0) {
            return {
              success: true,
              files: data.files,
              source: 'manifest',
              message: `${data.files.length} file rilevati dal catalogo statico`,
            };
          }
        }
      }
    } catch {
      // try next url
    }
  }

  // 3. Fallback: Directly fetch known files that exist in public/
  try {
    const fetchedFiles: ScannedSnippetFile[] = [];

    await Promise.all(
      KNOWN_PUBLIC_SNIPPETS.map(async (item) => {
        try {
          const webPath = item.filePath.replace(/^public\//, '/');
          const fileRes = await fetch(`${webPath}?_t=${Date.now()}`);
          if (fileRes.ok) {
            const htmlContent = await fileRes.text();
            // Check if it's actual snippet HTML and not an SPA index fallback
            if (htmlContent.includes('<html') || htmlContent.includes('<style') || htmlContent.includes('<div')) {
              fetchedFiles.push({
                filePath: item.filePath,
                category: item.category,
                title: item.title,
                code: htmlContent,
              });
            }
          }
        } catch {
          // ignore individual fetch errors
        }
      })
    );

    if (fetchedFiles.length > 0) {
      return {
        success: true,
        files: fetchedFiles,
        source: 'fallback',
        message: `${fetchedFiles.length} file HTML sincronizzati con successo via percorso diretto`,
      };
    }
  } catch (err: any) {
    return {
      success: false,
      files: [],
      source: 'fallback',
      error: err?.message || 'Errore durante la scansione dei file',
    };
  }

  return {
    success: false,
    files: [],
    source: 'fallback',
    error: 'Nessun file HTML trovato nella cartella public/snippets',
  };
}
