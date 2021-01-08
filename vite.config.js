const { resolve } = require('path')
import copy from 'rollup-plugin-copy'

module.exports = {
  root: resolve(__dirname, 'src'),
  alias: {
    '/ckeditor/**': '../node_modules/ckeditor4/**'
  },
  build: {
    base: '/',
    outDir: resolve(__dirname, './dist'),
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'node_modules/ckeditor4/*',
          dest: 'dist/ckeditor',
        }
      ],
      hook: 'writeBundle'
    })
  ],
}
