module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./assets')

  eleventyConfig.addPassthroughCopy({
    './node_modules/@fontsource/poppins/*.css': '/fonts/poppins/.',
    './node_modules/@fontsource/poppins/files': '/fonts/poppins/files',
    './node_modules/chisel.css/dist': '/assets/',
  })

  return {
    passthroughFileCopy: true,
  }
}
