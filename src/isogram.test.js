const isogram = require('./isogram');

describe('isogram', () => {
  it('"Dermatoglyphics" should return true', () => {
    expect(isogram("Dermatoglyphics")).toBe(true);
  });
});
