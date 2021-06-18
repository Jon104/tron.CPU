const codeDirectory = '/home/jarvis/code/';
const cwd = codeDirectory + 'tron.bot/';
const src = 'src/'

const actions = cwd + src + 'actions/'
const actionsIndex = actions + 'index.js'
const components = cwd + src + 'components/'
const reducers = cwd + src + 'reducers/'
const reducersIndex = reducers + 'index.js' 

const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

const lineBreaks = "\n"

const Manifest = 'manifest.json'

module.exports = { actions, actionsIndex, codeDirectory, components, cwd, ERROR, lineBreaks, Manifest, reducers, reducersIndex, SUCCESS }