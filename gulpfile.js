const gulp = require('gulp')
const gutil = require('gulp-util')
const webpack = require('webpack')
const path = require('path')

gulp.task('cjs', function (callback) {
  var myConfig = {
    entry: {
      preload: './src/cscripts/index.js'
    },
    output: {
      path: path.join(__dirname, './public/js'),
      publicPath: './public/js',
      filename: 'cjs.js'
    }
  }

  // run webpack
  webpack(myConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString({
      colors: true,
      progress: true
    }))
    callback()
  })
})
