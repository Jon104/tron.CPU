const enableWorkMode = ws => {
  // todo
  // Currently, the music is handled clientside
  // Would be great to have it handled serverside
  ws.send("Work mode enable! I'm sure we'll be focused for AT LEAST 7 minutes this time!")
  ws.send("PlayWeBuiltThisCity") 
}
const howAreYou = () => "I'm good. How about you?"
const salute = () => 'Hello to you my dear old friend.'
const thanks = () => 'Ohhh how lovely........!'

module.exports = { enableWorkMode, howAreYou, salute, thanks }