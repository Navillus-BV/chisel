const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')

module.exports = function (eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight)

  // Copy static assets to the output directory
  eleventyConfig.addPassthroughCopy('./assets')
  eleventyConfig.addPassthroughCopy({
    './node_modules/@fontsource/poppins/*.css': '/fonts/poppins/.',
    './node_modules/@fontsource/poppins/files': '/fonts/poppins/files',
    './node_modules/chisel.css/dist': '/assets/',
  })

  // Customize Markdown library and settings
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#',
  })
  eleventyConfig.setLibrary('md', markdownLibrary)

  return {
    passthroughFileCopy: true,
  }
}
