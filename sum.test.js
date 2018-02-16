const sumTest = require('./ragu'); //reguire is our file name

test('adds 1 + 2 to equal 3', () => {
  expect(sumTest(1, 2)).toBe(3);
});