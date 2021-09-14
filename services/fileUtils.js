const fs = require("fs");
const glob = require("glob");
const { Manifest, cwd } = require("./constants");
const { errorHandling } = require("./ErrorHandlers");
const { resolve } = require("path");
const { readdir } = require("fs").promises;

const src = "src/";

const actions = cwd + src + "actions/";
const actionsIndex = actions + "index.js";
const components = cwd + src + "components/";
const reducers = cwd + src + "reducers/";
const reducersIndex = reducers + "index.js";

const lineBreaks = "\n";

const formatActionFilepath = (name) => `${name}Actions` + ".js";
const formatComponentFilepath = (name) => components.concat(`${name}`) + ".jsx";
const formatReducerFilepath = (name) => `${reducers}${name}Reducer` + ".js";

const copyFile = (src, dest) =>
  fs.copyFile(src, dest, (err) => {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  });
const writeFile = (path, content) => fs.writeFile(path, content, errorHandling);
const readFile = (path) => fs.readFileSync(path).toString();
const toLines = (stream) => stream.split(lineBreaks);
const toFilepath = (filename) =>
  glob
    .sync(cwd.concat("**/*.json"), ignoreConfig)
    .find((element) => element.search(filename) > 0);

const ignoreConfig = {
  ignore: ["**/node_modules/**", "**/.git/**", "**/*.test.js"],
};

const isFilePresent = (filename, pattern) =>
  glob
    .sync(cwd.concat(`**/*.${pattern}`), ignoreConfig)
    .find((element) => element.search(filename) > 0);

const doesStringExist = (searchString, pattern) => {
  const files = glob
    .sync(cwd.concat(`**/*.${pattern}`, ignoreConfig))
    .find((element) => console.log(readFile(element)));
};

module.exports = {
  copyFile,
  writeFile,
  doesStringExist,
  formatActionFilepath,
  formatComponentFilepath,
  formatReducerFilepath,
  isFilePresent,
  readFile,
  toLines,
  toFilepath,
};
