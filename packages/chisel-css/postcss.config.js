module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-nesting')(),
        require('postcss-custom-properties')({ preserve: true }),
        require('postcss-combine-media-query'),
        require('postcss-custom-properties')(),
        require('autoprefixer')
    ]
}
