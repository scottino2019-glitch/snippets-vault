import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';
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
      generateManifest();

      server.middlewares.use('/api/scan-public-snippets', (req, res) => {
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
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: 'Snippet Vault',
          short_name: 'snippets',
          description: 'Raccolta di snippets personali',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
           {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-192x192-maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/icons/icon-512x512-maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    },
          ],
        },
        workbox: {
          // Include anche il json generato dal tuo scanner personalizzato per la fruizione offline
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
