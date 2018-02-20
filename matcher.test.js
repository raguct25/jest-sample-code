// matchers:
test('two plus two is four', ()=>{
  expect(2 - 4).toBe(-2);
});
//Using Json
test('object assignment',()=>{
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
//Using loop opposite matchers
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
//Truthiness
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
//Numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});
//floating numbers
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);  //This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
//arrays
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];
test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('trash bags');
});
//Exceptions
function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK');
}
test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  //expect(compileAndroidCode).toThrow(ConfigError);
  // You can also use the exact error message or a regexp
  //expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  //expect(compileAndroidCode).toThrow(/JDK/);
});
