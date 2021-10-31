const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

module.rules = withFonts(
  withOptimizedImages({
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
  })
);
