import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'src',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }
})