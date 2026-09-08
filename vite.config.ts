import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function snippetsScannerPlugin(): Plugin {
  return {
    name: 'snippets-scanner',
    configureServer(server) {
      server.middlewares.use('/api/scan-public-snippets', (req, res) => {
        try {
          const snippetsDir = path.resolve(__dirname, 'public/snippets');
          const results: {
            filePath: string;
            category: string;
            title: string;
            code: string;
          }[] = [];

          function scanDir(dir: string, currentCategory: string) {
            if (!fs.existsSync(dir)) return;
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              if (entry.isDirectory()) {
                scanDir(fullPath, entry.name);
              } else if (entry.isFile() && entry.name.endsWith('.html')) {
                const relativePath = path.relative(path.resolve(__dirname), fullPath);
                const code = fs.readFileSync(fullPath, 'utf-8');
                const title = entry.name
                  .replace('.html', '')
                  .split(/[-_]/)
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ');
                results.push({
                  filePath: relativePath,
                  category: currentCategory || 'schede',
                  title,
                  code,
                });
              }
            }
          }

          scanDir(snippetsDir, '');
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, files: results }));
        } catch (e: any) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), snippetsScannerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
