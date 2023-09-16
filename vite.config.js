import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { pageData } from './pageData.js'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  plugins: [
    handlebars({
      context(pagePath) {
        const data = pageData[pagePath]
        data['siteName'] = 'My Site'
        return data
      },
      partialDirectory: resolve(__dirname, 'src', 'partials')
    })
  ],
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        project: resolve(__dirname, 'src', 'project', 'index.html'),
        office: resolve(__dirname, 'src', 'office', 'index.html'),
      }
    }
  }
})
