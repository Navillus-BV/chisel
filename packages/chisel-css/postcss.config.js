const prod = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-nesting')(),
        require('postcss-custom-properties')({ preserve: true }),
        require('postcss-custom-media')(),
        require('postcss-combine-media-query'),
        require('autoprefixer'),
        prod && require('cssnano')(),
    ].filter(Boolean),
}
