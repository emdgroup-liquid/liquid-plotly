import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    copy({
      targets: [
        {
          src: 'node_modules/@emdgroup-liquid/liquid/dist/liquid/assets/*',
          dest: 'assets',
        },
      ],
      hook: 'buildStart',
    }),
    react(),
  ],
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
      external: ['react'],
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
