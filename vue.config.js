module.exports = {
  publicPath:'/',
  outputDir:'dist',
  assetsDir:'assets',

  productionSourceMap:false,
  lintOnSave:true,


  devServer:{
    open:true,
    proxy:{
      '/api':{
        target:'http://www.whitejotter.site:8085',
        changeOrigin: true,
        ws:true,
        // pathRewrite:{
          // '^/api':''
        // }
      }
    }
  }
}