// svelte.config.js
const sveltePreprocess = require("svelte-preprocess");

function createPreprocessors(sourceMap) {
  return sveltePreprocess({
    sourceMap: sourceMap,
    defaults: {
      markup: "html",
      script: "typescript",
      style: "css",
    },
    postcss: {
      plugins: [require("autoprefixer")()],
    },
  });
}

module.exports = {
  preprocess: createPreprocessors(true),
  createPreprocessors,
};
