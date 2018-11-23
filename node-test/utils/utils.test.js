const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    const res = utils.add(2, 3);

    expect(res).toBe(5);
    //   if (res !== 5) {
    //     throw new Error(`Expected 5 but got ${res}`);
    //   }
  });

  it('should square number', () => {
    const res = utils.square(3);

    expect(res)
      .toBe(9)
      .toBeA('number');
  });

  it('should expect some value', () => {
    //   expect(12).toNotBe(11);
    //   expect({ name: 'simon' }).toEqual({ name: 'simon' });
    //   expect([2, 3, 4]).toInclude(4);
    expect({
      name: 'Max Muster',
      age: 55,
      location: 'Berlin'
    }).toInclude({ age: 55 });
  });

  it('should include firstName and lastName', () => {
    const User = {
      location: 'Berlin',
      age: 66
    };

    const name = 'Max Muster';
    const res = utils.setName(User, name);
    expect(res)
      .toInclude({ firstName: 'Max', lastName: 'Muster' })
      .toBeA('object');
  });

  describe('async Functions', () => {
    it('should asyncAdd two numbers', done => {
      utils.asyncAdd(4, 3, sum => {
        expect(sum)
          .toBe(7)
          .toBeA('number');
        done();
      });
    });

    it('should sync Square a number', done => {
      utils.asyncSquare(3, res => {
        expect(res)
          .toBe(9)
          .toBeA('number');
        done();
      });
    });
  });
});
