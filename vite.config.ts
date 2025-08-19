import {defineConfig} from "vite"
import terser from "@rollup/plugin-terser"
import {minifyTemplateLiterals} from "rollup-plugin-minify-template-literals"


const __dirname = `.`
const __dist = `${__dirname}/dist`
const __src = `${__dirname}/src`

export default defineConfig({
  plugins: [
    minifyTemplateLiterals({ exclude: 'node_modules/**' }),
    terser({ format: { comments: false }})
  ],
  build: {
    lib: {
      entry: {
        'prf': `${__src}/index.ts`,
        'prf.elements': `${__src}/elements/index.ts`,
        'prf.events': `${__src}/events/index.ts`,
      },
      name: 'prf',
      formats: ['cjs', 'es'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'lib/prf.elements.js'
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
