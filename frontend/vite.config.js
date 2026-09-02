import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    allowedHosts: ['get-the-look-production.up.railway.app'],
  },

  preview: {
    allowedHosts: ['get-the-look-production.up.railway.app'],
  },
})
