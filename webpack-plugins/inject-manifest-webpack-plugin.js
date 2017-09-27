/*
usage: 
1. 在webpack.prod.conf.js中引入 并在plugins中初始化 new ManifestInjectPlugin()
2. 在html模板文件中添加 <!-- manifest will be auto inject --> 打包后的js将会注入到这里
3. done
 */
const sourceMappingURL = require('source-map-url')

function ManifestInjectPlugin () {}

ManifestInjectPlugin.prototype.apply = compiler => {
  compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
      let {assets, html} = htmlPluginData
      const manifestPath = (compilation.chunks.filter(chunk => chunk.name === 'manifest')[0] || {files: []}).files[0]
      const [manifest, manifestIndex] = [[], assets.js.indexOf(assets.publicPath + manifestPath)]

      manifest.push('<script type="text/javascript">')
      manifest.push(sourceMappingURL.removeFrom(compilation.assets[manifestPath].source()))
      manifest.push('</script>')
      
      htmlPluginData.html = html.replace('<!-- manifest will be auto inject -->', manifest.join('')) 
      if (manifestIndex >= 0) {
        assets.js.splice(manifestIndex, 1)
        delete assets.chunks.manifest
      }
      callback(null, htmlPluginData)
    })
  })
}

module.exports = ManifestInjectPlugin
