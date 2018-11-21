const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(2, 3);
  if (res !== 5) {
    throw new Error(`Expected 5 but got ${res}`);
  }
});

it('should square number', () => {
  const res = utils.square(3);

  if (res !== 9) {
    throw new Error(`Expected 9 but got ${res}`);
  }
});
