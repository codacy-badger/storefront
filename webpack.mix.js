let mix = require('laravel-mix');

mix
    .options(
        {
            publicPath: 'public',
            assetsPath: 'assets'
        }
    )
    .js('assets/js/app.js', 'public/js')
    .sass('assets/sass/app.scss', 'public/css')
    .copyDirectory('assets/img', 'public/img');
