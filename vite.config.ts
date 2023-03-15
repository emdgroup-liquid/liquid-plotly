import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/ts/index.ts'),
      name: 'liquid_plotly',
      formats: ['umd'],
      // the proper extensions will be added
      fileName: 'liquid_plotly',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', '@emdgroup-liquid/liquid'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'plotly.js': 'Plotly',
          'prop-types': 'PropTypes',
        },
        dir: resolve(__dirname, 'liquid_plotly'),
      },
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
      ],
    },
    emptyOutDir: false,
  },
})
