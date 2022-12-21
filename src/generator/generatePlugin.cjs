const postcss = require("postcss");
const postcssJs = require("postcss-js");
const nano = require("cssnano");
const { readFile, writeFile, mkdir, access, rm } = require("node:fs/promises");
const { resolve } = require("node:path");

const postcssImport = require("postcss-import");

async function main() {
  const templatePath = resolve(__dirname, "plugin-template.cjs");
  const mainCssPath = resolve(process.cwd(), "src/styles/index.css");

  const css = await readFile(mainCssPath, "utf-8");
  const processedCss = await postcss([postcssImport, nano]).process(css, {
    from: mainCssPath,
  });
  const json = postcssJs.objectify(processedCss.root);

  const template = await readFile(templatePath, "utf-8");
  const base = get(json, "@layer base");
  const staticComponents = get(json, "@layer components");
  const staticUtils = get(json, "@layer utilities");
  const plugin = template
    .replace('"placeholder:base"', base)
    .replace('"placeholder:staticComponents"', staticComponents)
    .replace('"placeholder:staticUtils"', staticUtils);

  rm("dist", { recursive: true })
    .catch(() => {})
    .finally(() => {
      mkdir("dist");
      writeFile("dist/out.cjs", plugin);
    });
}

function get(json, layer) {
  let result = null;
  if (Array.isArray(json[layer])) {
    result = json[layer].reduce((p, c) => ({ ...p, ...c }));
  } else if (typeof json[layer] === "object") {
    result = json[layer];
  }
  return result ? JSON.stringify(result, null, 4): "{}";
}

main();
