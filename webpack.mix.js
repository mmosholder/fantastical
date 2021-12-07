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
    .copy('src/fonts/', 'dist/fonts');