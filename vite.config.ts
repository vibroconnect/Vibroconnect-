import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@components': path.resolve(__dirname, './client/src/components'),
      '@assets': path.resolve(__dirname, './client/src/assets'),
      '@lib': path.resolve(__dirname, './client/src/lib'),
      '@hooks': path.resolve(__dirname, './client/src/hooks'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
