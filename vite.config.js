import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    // exclude: ['tw-elements'], // 確保排除tw-elements，防止Vite嘗試編譯它
  },
  build: {
    // sourcemap: false,
  },
})
