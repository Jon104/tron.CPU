const fs = require("fs");
const glob = require("glob");
const { Manifest, cwd } = require("./constants");
const { errorHandling } = require("./ErrorHandlers");

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

const createFile = (path, content) =>
  fs.writeFile(path, content, errorHandling);
const readFile = (path) => fs.readFileSync(path);
const toLines = (stream) => stream.split(lineBreaks);
const toFilepath = (filename) =>
  glob
    .sync(cwd.concat("**/*.json"), ignoreConfig)
    .find((element) => element.search(filename) > 0);

const ignoreConfig = {
  ignore: ["**/node_modules/**", "**/.git/**", "**/*.test.js"],
};
const isFilePresent = (filename) =>
  glob
    .sync(cwd.concat("**/*.json"), ignoreConfig)
    .find((element) => element.search(filename) > 0) > 0;

module.exports = {
  createFile,
  formatActionFilepath,
  formatComponentFilepath,
  formatReducerFilepath,
  isFilePresent,
  readFile,
  toLines,
  toFilepath,
};
