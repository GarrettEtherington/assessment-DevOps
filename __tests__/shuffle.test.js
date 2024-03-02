const shuffle = require("../src/shuffle");

describe("shuffle should not be a big ol bunch of cringe (like it is as of me writing this)", () => {
  test(`shuffle should return an array`, () => {
    const result = shuffle()
    expect(result).toBeInstanceOf(Array)
  })
  test(`the array should be the same length as the argument sent in`, () => {
    const array = [`bill`, `jill`, `gil`, `Sir Gideon Ofnir, The All Knowing`]
    const length = array.length
    const result = shuffle(array)
    expect(result.length).toBe(length)
  })
});