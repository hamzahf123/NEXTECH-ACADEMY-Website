import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
  build: {
    outDir: 'dist',
    assetsDir: 'build',
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|@remix-run)[\\/]/.test(id)) {
            return 'vendor-react';
          }
        },
      },
    },
  },
});
