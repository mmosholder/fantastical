let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js')
    .sass('src/scss/style.scss', 'dist/css').options({
        processCssUrls: false
    })
    .options({
        postCss: [
            require('postcss-preset-env')
        ]
    })
    .copy('src/images/', 'dist/images')
    .copy('src/fonts/', 'dist/fonts');