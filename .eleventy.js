module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" }
  };
};
