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
      // Fix React version conflict by not using esbuild runtime
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    // Only expose VITE_* prefixed variables to the client
    envPrefix: 'VITE_',
    // Ensure single copy of React
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    // Disable dependency pre-bundling optimization to avoid version conflicts
    optimizeDeps: {
      exclude: ['react', 'react-dom'],
    },
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