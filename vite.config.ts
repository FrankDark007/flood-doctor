import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import sirv from 'sirv';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isDev = mode === 'development';

    // City build mode - for independent city subdomain sites
    // Set via: VITE_BUILD_MODE=city npm run build
    const isCityBuild = process.env.VITE_BUILD_MODE === 'city';

    // Snapshot path for parity testing (dev-only)
    const snapshotPath = path.resolve(__dirname, 'tools/snapshots/gbp');
    const snapshotIndexPath = path.join(snapshotPath, 'business.google.com/us/business-profile/index.html');
    const snapshotExists = fs.existsSync(snapshotIndexPath);

    // Build plugins array with proper typing
    const plugins: PluginOption[] = [
      react(),
    ];

    // Dev-only middleware to serve GBP snapshot for parity testing
    if (isDev) {
      plugins.push({
        name: 'gbp-snapshot-middleware',
        configureServer(server) {
          if (!snapshotExists) {
            console.warn('\n⚠️  GBP snapshot not found!');
            console.warn('   Parity testing routes (/dev/gbp-clone-v3, /dev/fd-home-v3-parity) will not work.');
            console.warn('   To fix: Copy/extract SiteSucker capture into tools/snapshots/gbp/');
            console.warn('   Expected file: tools/snapshots/gbp/business.google.com/us/business-profile/index.html\n');
            return;
          }
          server.middlewares.use('/gbp', sirv(snapshotPath, { dev: true }));
        },
      });
    }

    return {
      // Root domain deployment (flood.doctor)
      base: '/',
      server: {
        port: 3002,
        host: '0.0.0.0',
      },
      plugins,
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Disable source maps in production (keep dev clean, avoid shipping .map files)
        sourcemap: isDev,
        // Code splitting configuration
        rollupOptions: {
          // City build mode uses city.html entry point
          // This creates an independent bundle for city subdomain sites
          input: isCityBuild
            ? { city: path.resolve(__dirname, 'city.html') }
            : { main: path.resolve(__dirname, 'index.html') },
          output: {
            manualChunks: isCityBuild
              ? {
                  // City build - simpler chunking focused on city pages
                  'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                  'vendor-icons': ['lucide-react'],
                }
              : {
                  // Main site build - full chunking
                  // Vendor chunks - split large dependencies
                  'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                  'vendor-icons': ['lucide-react'],
                  // Feature chunks
                  'pages-blog': [
                    './pages/blog/emergency-water-damage-response-virginia',
                    './pages/blog/mold-after-water-damage-virginia',
                    './pages/blog/sump-pump-failure-basement-flooding-nova',
                    './pages/blog/commercial-water-damage-business-continuity',
                    './pages/blog/crawl-space-moisture-virginia-homes',
                  ],
                  'pages-locations': [
                    './pages/locations/AlexandriaWaterDamage',
                    './pages/locations/ArlingtonWaterDamage',
                    './pages/locations/FairfaxWaterDamage',
                    './pages/locations/McLeanWaterDamage',
                  ],
                  'pages-landing': [
                    './pages/landing/WaterDamageRestorationArlington',
                    './pages/landing/WaterDamageRestorationFairfax',
                    './pages/landing/WaterDamageRestorationServices',
                  ],
                  'illustrations': [
                    './components/ui/illustrations/service-hero/index',
                  ],
                },
          },
        },
        // Increase chunk size warning limit since we're intentionally splitting
        chunkSizeWarningLimit: 600,
      },
    };
});
