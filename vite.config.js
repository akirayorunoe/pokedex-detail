import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: '/pokedex-detail/',
  plugins: [react(),
  federation({
    name: 'pokedex-detail',
    filename: 'remoteEntry.js',
    exposes: {
      './PokeDetail': './src/components/PokeDetail.jsx'
    },
    shared: ['react', 'react-dom', '@tanstack/react-query', 'react-router-dom', 'gh-pages']
  })
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
