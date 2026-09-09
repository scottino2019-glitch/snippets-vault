import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

function generateManifest() {
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
    const data = JSON.stringify({ success: true, files: results, updatedAt: Date.now() }, null, 2);
    
    // Write manifest to public directory so it's always accessible statically
    const manifestPath = path.resolve(__dirname, 'public/snippets/snippets-manifest.json');
    const manifestRootPath = path.resolve(__dirname, 'public/snippets-manifest.json');
    fs.writeFileSync(manifestPath, data, 'utf-8');
    fs.writeFileSync(manifestRootPath, data, 'utf-8');
    return results;
  } catch (err) {
    console.error('Error generating snippets manifest:', err);
    return [];
  }
}

function snippetsScannerPlugin(): Plugin {
  return {
    name: 'snippets-scanner',
    buildStart() {
      generateManifest();
    },
    configureServer(server) {
      // Generate initial manifest
      generateManifest();

      server.middlewares.use('/api/scan-public-snippets', (req, res) => {
        // Handle CORS preflight
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        try {
          const results = generateManifest();
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ success: true, files: results }));
        } catch (e: any) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ success: false, error: e.message }));
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/scan-public-snippets', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        const results = generateManifest();
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ success: true, files: results }));
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      snippetsScannerPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon.svg', 'apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png', 'snippets-manifest.json'],
        manifest: {
          id: '/',
          name: 'Snippet HTML Studio',
          short_name: 'HTMLStudio',
          description: 'Contenitore e anteprima visiva per frammenti HTML personali con rendering istantaneo.',
          theme_color: '#0f766e',
          background_color: '#1b3a5b',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff,woff2}'],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
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
