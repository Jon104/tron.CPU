const actionsIndexTemplate = name => `export * from "./${name}Actions.js"`

const actionGetMethodTemplate = name => `export const ${name} = () => async dispatch => {
  await axios.get('/toImplement')
  .then((response) => dispatch({ type: 'TOIMPLEMENT', payload: response.data }))
  .catch((err) => console.error(err))
}
`

const componentBasicTemplate = name => `import React from 'react'

const ${name} = () => {
  return (
    <>      
      <p>I'M ALIVE!</p>
    </>
  )
}

export default ${name}
`

const emptyFileTemplate = () => ''

const reducerBasicTemplate = name => `const initialState = {}

const ${name}Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default ${name}Reducer
`

const reducerIndexTemplate = name => `import { combineReducers } from "redux";
import ${name}Reducer from "./${name}Reducer";

const rootReducer = combineReducers({
  ${name}Reducer,
});

export default rootReducer;
`

const manifestContent = `
  name: "Ala",
  short_name: "appName",
  description: "olo",
  icons: [
    {
      src: "/_nuxt/icons/icon_64x64.ec0ca4.png",
      sizes: "64x64",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/_nuxt/icons/icon_120x120.ec0ca4.png",
      sizes: "120x120",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/_nuxt/icons/icon_144x144.ec0ca4.png",
      sizes: "144x144",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/_nuxt/icons/icon_152x152.ec0ca4.png",
      sizes: "152x152",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/_nuxt/icons/icon_192x192.ec0ca4.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/_nuxt/icons/icon_384x384.ec0ca4.png",
      sizes: "384x384",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/_nuxt/icons/icon_512x512.ec0ca4.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ],
  start_url: "/?standalone=true",
  display: "standalone",
  background_color: "#ffffff",
  lang: "en",
  crossorigin: "use-credentials"
`

module.exports = { actionsIndexTemplate, actionGetMethodTemplate, componentBasicTemplate, emptyFileTemplate, manifestContent, reducerBasicTemplate, reducerIndexTemplate }