import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/atlas-house0/',
  build: { outDir: 'docs' },
   plugins: [react()]
}))
