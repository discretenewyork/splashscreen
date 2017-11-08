var path = require('path')
var stealTools = require('steal-tools')
var fs = require('fs')

const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const config = path.join(rootDir, 'package.json!npm')
const index = {
  src: path.join(rootDir, 'index.prod.html'),
  dest: path.join(distDir, 'index.html')
}
const favicon = {
  src: path.join(rootDir, 'favicon.png'),
  dest: path.join(distDir, 'favicon.png')
}

stealTools.optimize({ config }, {
  sourceMap: true,
  minify: true,
  target: 'web',
  envify: true
}).then(() => {
  fs.copyFileSync(index.src, index.dest)
  fs.copyFileSync(favicon.src, favicon.dest)
}, e => {
  console.log('ERROR', e)
})
