import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Root domain deployment (flood.doctor)
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
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
        // Code splitting configuration
        rollupOptions: {
          output: {
            manualChunks: {
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
