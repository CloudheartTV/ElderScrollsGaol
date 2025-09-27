import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the correct base path for GitHub Pages when deploying to the repo "abby-personal-portfolio"
  base: '/abby-personal-portfolio/',
})
