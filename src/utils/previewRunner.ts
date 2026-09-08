/**
 * Generates an isolated HTML document string for an iframe srcDoc.
 * Optimized for pure HTML + Tailwind CSS with dark mode support and Lucide icons.
 */

export function generateIframeDoc(code: string, _type?: string, isDark: boolean = false): string {
  const bgClass = isDark ? '#090d16' : '#f8fafc';
  const textClass = isDark ? '#f1f5f9' : '#0f172a';

  // Normalize className="..." to class="..." if user pasted React JSX markup
  const normalizedCode = code
    .replace(/\bclassName=/g, 'class=')
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, ''); // strip React comments

  return `<!DOCTYPE html>
<html lang="it" class="${isDark ? 'dark' : ''}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Tailwind CSS CDN with dark mode enabled -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
          }
        }
      }
    };
  </script>
  <!-- Lucide Icons for HTML <i data-lucide="..."></i> -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: ${bgClass};
      color: ${textClass};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .preview-wrapper {
      min-height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }
    .error-container {
      background-color: #fef2f2;
      border: 1px solid #f87171;
      color: #991b1b;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      font-size: 0.75rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
      max-width: 90%;
    }
  </style>
</head>
<body class="${isDark ? 'dark' : ''}">
  <div class="preview-wrapper">
    ${normalizedCode}
  </div>

  <script>
    // Initialize Lucide icons
    try {
      if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
      }
    } catch (e) {
      console.warn('Lucide icon init warning:', e);
    }

    // Global error handler for embedded scripts
    window.addEventListener('error', function(event) {
      console.warn('Snippet runtime notice:', event.message);
    });
  </script>
</body>
</html>`;
}
