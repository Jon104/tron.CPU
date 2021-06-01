const codeDirectory = '/home/jarvis/code/';
const cwd = codeDirectory + 'just-a-rather-very-intelligent-system/';
const src = 'src/'

const actions = cwd + src + 'actions/'
const actionsIndex = actions + 'index.js'
const components = cwd + src + 'components/'
const reducers = cwd + src + 'reducers/'
const reducersIndex = reducers + 'index.js' 

module.exports = { actions, actionsIndex, codeDirectory, components, cwd, reducers, reducersIndex }