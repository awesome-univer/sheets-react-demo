import { defineConfig } from 'vite'
import { univerPlugin } from "@univerjs/vite-plugin";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    univerPlugin(),
    react()
  ],
})
