const componentBasicTemplate = (name) => `import React from 'react'\r\n\r\nconst ${name} = () => {\r\n  return (\r\n    <>\r\n      <p>I'M ALIVE!</p>\r\n    </>\r\n  )\r\n}\r\n\r\nexport default ${name}`

module.exports = { componentBasicTemplate }