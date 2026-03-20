import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determine base URL from ROOT_URL environment variable (set by Coolify)
  // Default to '/' for local development
  const rootUrl = process.env.ROOT_URL || process.env.VITE_ROOT_URL || '/';

  return {
    plugins: [react()],
    base: rootUrl,
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development', // Only generate sourcemaps in dev
    },
    // Only expose VITE_* prefixed variables to the client
    envPrefix: 'VITE_',
    server: {
      port: 3000,
      host: true,
    },
    preview: {
      port: 3000,
      host: true,
    },
  }
})