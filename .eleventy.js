module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",          // Set the input to the "src" directory
      includes: "_includes", // This tells Eleventy to look for _includes inside src/
      output: "_site"
    }
  };
};