const { stopMusic } = require('./MusicService')

test('Stopping the music should make J.A.R.V.I.S disapointed', () => {
  expect(stopMusic()).toBe('Awww... it was my favorite song....!')
})