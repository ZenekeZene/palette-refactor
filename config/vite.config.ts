import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import ViteYaml from '@modyfi/vite-plugin-yaml'

const indexUrl = './applications/frontend/index.html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteYaml(), tsconfigPaths()],
  root: './applications/frontend',
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        app: indexUrl,
      },
    },
  },
  publicDir: "./public",
  server: {
    open: '/',
  },
})
