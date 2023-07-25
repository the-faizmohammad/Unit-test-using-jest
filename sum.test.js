const sum = require('./sum');

describe('Sum Function Test Suite 1', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});

describe('Sum Function Test Suite 2', () => {
  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});

describe('Sum Function Test Suite 3', () => {
  test('adds large numbers (1000 + 5000)', () => {
    expect(sum(1000, 5000)).toBe(6000);
  });

  test('adds negative and positive numbers (-5 + 5)', () => {
    expect(sum(-5, 5)).toBe(0);
  });
});
