const htmlmin = require("html-minifier");
const util = require("util");
require("dotenv").config();
const isProduction = process.env.ELEVENTY_ENV === `production`;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");

  eleventyConfig.addFilter("group_by", groupBy);

  // Add a filter to pretty-print JSON
  eleventyConfig.addFilter("prettyJson", function(obj) {
    return JSON.stringify(obj, null, 2);  // '2' adds indentation
  });

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

function groupBy(array, key) {
  const get = (entry) => key.split(".").reduce((acc, key) => acc[key], entry);

  const map = array.reduce((acc, entry) => {
    const value = get(entry);

    if (typeof acc[value] === "undefined") {
      acc[value] = [];
    }

    acc[value].push(entry);
    return acc;
  }, {});

  return Object.keys(map).reduce(
    (acc, key) => [...acc, { name: key, items: map[key] }],
    []
  );
}
