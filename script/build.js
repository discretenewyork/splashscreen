var path = require('path')
var stealTools = require('steal-tools')
var fs = require('fs')

const rootDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(rootDir, 'src')
const distDir = path.join(rootDir, 'dist')
const config = path.join(rootDir, 'package.json!npm')

const index = {
  src: path.join(srcDir, 'index.prod.html')
  dest: path.join(distDir, 'index.html')
}
const favicon = {
  src: path.join(srcDir, 'favicon.png'),
  dest: path.join(distDir, 'favicon.png')
}

stealTools.optimize({ config }, {
  sourceMap: true,
  taget: 'web',
  envify: true,
  minify: true
}).then(() => {
  fs.copyFile(index.src, index.dest)
  fs.copyFile(favicon.src, favicon.dest)
}, e => {
  console.log('ERROR:', e)
})
