import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import ViteYaml from '@modyfi/vite-plugin-yaml'

const indexUrl = './applications/frontend/index.html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteYaml(), tsconfigPaths()],
  build: {
    rollupOptions: {
      input: {
        app: indexUrl,
      },
    },
  },
  server: {
    open: indexUrl,
  },
})
