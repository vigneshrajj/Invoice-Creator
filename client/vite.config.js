import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  alias: {
    '/@': path.resolve(__dirname, './src')
  },
  build: {
    outDir: '../build'
  }
})
