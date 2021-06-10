const errorHandling = (error, stdout, stderr) => {
  if (error) return console.log(`error: ${error.message}`)
  if (stderr) return console.log(`stderr: ${stderr}`)
  
  console.log(`stdout: ${stdout}`);
}

module.exports = { errorHandling }