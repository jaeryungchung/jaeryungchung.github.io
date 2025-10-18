import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use root base for both dev and user-site deployment (user site serves from root)
export default defineConfig({
  base: '/',
  plugins: [react()]
})