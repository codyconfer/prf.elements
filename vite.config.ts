import {defineConfig} from "vite"
import terser from "@rollup/plugin-terser"
import {minifyTemplateLiterals} from "rollup-plugin-minify-template-literals"


const __dirname = `.`
const __dist = `${__dirname}/dist`
const __src = `${__dirname}/src`
const __elements = `${__src}/elements`

export default defineConfig({
  plugins: [
    minifyTemplateLiterals(),
    terser({ format: { comments: false }})
  ],
  build: {
    lib: {
      entry: {
        'prf-elements': `${__elements}/index.ts`,
      },
      name: 'prf',
      formats: ['cjs', 'iife', 'umd', 'es'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'prf.elements.js'
          case 'iife':
          case 'cjs':
          case 'umd':
          case 'system':
          default:
            return `lib/prf.elements.${format}.js`
        }
      },
    },
    rollupOptions: {
      input: {
        main: `${__dirname}/index.html`,
      },
    },
    outDir: __dist,
  },
})
