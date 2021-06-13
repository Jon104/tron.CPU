const { SUCCESS, cwd } = require("./constants")
const glob = require("glob")
// const PhysicsSphere = require("../templates/PhysicsSphere")
const { readFile, toLines } = require("./fileUtils")

const thereAreNoCanvas = () => document.querySelector('canvas') === undefined

const ignoreConfig = {
    ignore: [
        '**/node_modules/**',
        '**/.git/**',
        '**/*.test.js'
    ]
}

const addPhysicsSphere = name => {
    const contentByFiles = glob.sync(cwd.concat(`{**/*.js,**/*.jsx,**/*.html}`), ignoreConfig).map((file) => readFile(file))
    const lines = contentByFiles.map((content) => content.toString().search('<canvas'))
    console.log(lines)
    return { code: SUCCESS, message: 'I added a physics sphere' }
}

module.exports = { addPhysicsSphere }