import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})