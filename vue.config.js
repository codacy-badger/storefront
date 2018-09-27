const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [path.resolve(__dirname, 'src/assets/sass/app.sass')]
    }
  },
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  css: {
    extract: false
  }
}
