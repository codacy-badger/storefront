const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [path.resolve(__dirname, 'src/assets/sass/app.sass')]
    }
  }
}
