import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/salt-ai-web-site',
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@assets': '/src/assets'
    }
  },
  
  server: {
    port: 3000,
    open: true
  }
})