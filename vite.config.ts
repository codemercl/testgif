import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const vitePwa = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "giffy PWA applicataion",
    short_name: "giffy",
    description: "example",
    theme_color: "red",
    icons: [
      {
        src: 'assets/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: "image/png"
      },
      {
        src: 'assets/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: "image/png"
      }
    ]
  }
})

export default defineConfig({
  base: '/giffy',
  plugins: [vue(), vitePwa],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
