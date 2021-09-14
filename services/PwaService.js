const { SUCCESS, cwd, Manifest } = require("./constants");
const { addCodeToFile } = require("./CreationService");
const {
  writeFile,
  isFilePresent,
  readFile,
  toFilepath,
  toLines,
} = require("./fileUtils");
const { manifestContent } = require("./TemplateService");

const setupPwaApp = () => {
  if (!isFilePresent(Manifest, "json")) writeFile(cwd, manifestContent);
  const response = addCodeToFile(manifestContent, toFilepath(Manifest));
  console.log(response);
  return { code: SUCCESS, message: "I added a physics sphere" };
};

module.exports = { setupPwaApp };
