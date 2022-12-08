const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, addComponents, addUtilities }) {
  addBase(base);
  addComponents(staticComponents);
  addUtilities(staticUtils);
});

const base = "placeholder:base";

const staticComponents = "placeholder:staticComponents";

const staticUtils = "placeholder:staticUtils";
