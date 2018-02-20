const addAns = require('./add'); //reguire is our file name
const mulAns = require('./mul');

test('addAns() to be return to 6', ()=>{
  expect(addAns(4, 2)).toBe(6);
});
test('mulAns() to be return to 8', ()=>{
  expect(mulAns(4, 2)).toBe(8);
});
