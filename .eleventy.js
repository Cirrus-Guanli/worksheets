const htmlmin = require("html-minifier");
const util = require("util");
require("dotenv").config();
const isProduction = process.env.ELEVENTY_ENV === `production`;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");

  // Minify HTML Output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (isProduction && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "src", // Set the input to the "src" directory
      includes: "_includes", // This tells Eleventy to look for _includes inside src/
      output: "_site",
    },
  };
};
