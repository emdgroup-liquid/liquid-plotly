import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/ts/index.ts'),
      name: 'LiquidPlotly',
      formats: ['umd'],
      // the proper extensions will be added
      fileName: 'liquid_plotly',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'React',
        },
        sourcemap: true,
        dir: resolve(__dirname, 'liquid_plotly'),
      },
    },
    emptyOutDir: false,
  },
})
