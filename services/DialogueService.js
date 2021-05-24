const enableWorkMode = ws => {
  ws.send("Work mode enable! I'm sure we'll be focused for AT LEAST 7 minutes this time!")
  ws.send("PlayWeBuiltThisCity") 
}
const howAreYou = ws => ws.send("I'm good. How about you?")
const salute = ws => ws.send('Hello to you my dear old friend.')
const thanks = ws => ws.send("Ohhh how lovely........!")

module.exports = { enableWorkMode, howAreYou, salute, thanks }