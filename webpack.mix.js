let mix = require('laravel-mix');

mix
    .options(
        {
            publicPath: 'public',
            assetsPath: 'assets'
        }
    )
    .js('assets/js/app.js', 'public/js')
    .sass('assets/sass/app.scss', 'public/css/app_sass.css')
    .stylus('assets/sass/stylus/_sections.styl', 'public/css/sections_stylus.css')
    .stylus('assets/sass/stylus/_app.styl', 'public/css/app_stylus.css')
    .stylus('assets/sass/stylus/_styler.styl', 'public/css/styler_stylus.css')
    .styles(
        [
            'public/css/app_sass.css',
            'public/css/sections_stylus.css',
            'public/css/app_stylus.css',
            'public/css/styler_stylus.css',
            'node_modules/vuse/dist/vuse.css'
        ],
        'public/css/app.css'
    )
    .copyDirectory('assets/img', 'public/img');
