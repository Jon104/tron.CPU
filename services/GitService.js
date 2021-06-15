const { exec } = require("child_process");
const { cwd, SUCCESS } = require("./constants")
const { errorHandling } = require("./ErrorHandlers")

const addOrigin = ({ name, user }) => {
    initGit(exec)
    exec(`git remote add origin https://github.com/${user}/${name}.git`, {cwd: cwd}, errorHandling)
    return { 
        code: SUCCESS, 
        message: "I have published this repository to your github account"
    }
}

const initGit = execute => {
    execute('git init', {cwd: cwd}, errorHandling)
    return "I've initialized git"
  }

// const publishBranch = () => execute(git push --set-upstream origin master)
// const initializePackage = () => npm init --scope=@my-org

module.exports = { addOrigin, initGit }