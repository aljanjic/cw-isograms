const isogram = require('./isogram');

describe('isogram', () => {
  it('"Dermatoglyphics" should return true', () => {
    expect(isogram("Dermatoglyphics")).toBe(true);
  });

  it('"mama" should return false', () => {
    expect(isogram("mama")).toBe(false);
  });

  it('"isogram" should return true', () => {
    expect(isogram("isogram")).toBe(true);
  });
});
