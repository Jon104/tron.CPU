const actionsIndexTemplate = name => `export * from "./${name}Actions.js"`

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

module.exports = { actionsIndexTemplate, componentBasicTemplate, emptyFileTemplate, reducerBasicTemplate, reducerIndexTemplate }