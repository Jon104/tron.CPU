const codeDirectory = '/home/jarvis/code/';
const cwd = codeDirectory + 'just-a-rather-very-intelligent-system/';
const src = 'src/'

const actions = cwd + src + 'actions/'
const actionsIndex = actions + 'index.js'
const components = cwd + src + 'components/'
const reducers = cwd + src + 'reducers/'
const reducersIndex = reducers + 'index.js' 

const formatActionFilepath = name => `${name}Actions` + '.js'
const formatComponentFilepath = name => components.concat(`${name}`) + '.jsx'
const formatReducerFilepath = name => `${reducers}${name}Reducer` + '.js';

module.exports = { formatActionFilepath, formatComponentFilepath, formatReducerFilepath }