const { enableWorkMode, howAreYou, salute, thanks } = require('./DialogueService')

test('When a user salutes you, you should salute him back', () => {
  expect(salute()).toBe('Hello to you my dear old friend.')
})

test("When a user ask you how you're doing, you should answer a pleasant response", () => 
  expect(howAreYou()).toBe("I'm good. How about you?")
)

test('When a user thanks you, you should answer in a passive aggressive way', () => 
  expect(thanks()).toBe('Ohhh how lovely........!')
)