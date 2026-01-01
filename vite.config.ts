import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: ['.lvh.me', '.localhost', '.flood.doctor'],
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
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunks - rarely change, cached long-term
              'vendor-react': ['react', 'react-dom'],
              'vendor-router': ['react-router-dom'],
              // Icons - large, tree-shakeable
              'vendor-icons': ['lucide-react'],
            }
          }
        },
        // Increase warning limit slightly since we're now code-splitting
        chunkSizeWarningLimit: 300,
      }
    };
});
