import { find } from './find.js';

describe('Given function some', () => {
  describe('When receive null', () => {
    test('Then should TypeError', () => {
      const values = [null];
      expect(() => find(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [],null', () => {
    test('Then should TypeError', () => {
      const values = [[], null];
      expect(() => find(...values)).toThrow(
        TypeError('fn parameter must be a function')
      );
    });
  });

  describe('When receive [1,2],(i) => i === 2', () => {
    test('Then should be 2', () => {
      const values = [[1, 2], (i) => i === 2];
      const expectedResult = 2;
      const result = find(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [{a: 1},{a: 1, b:2}],(i) => i.a === 1', () => {
    test('Then should be { a: 1 }', () => {
      const values = [[{ a: 1 }, { a: 1, b: 2 }], (i) => i.a === 1];
      const expectedResult = { a: 1 };
      const result = find(...values);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive [1,2],(i) => i === 3', () => {
    test('Then should be undefined', () => {
      const values = [[1, 2], (i) => i === 3];
      const expectedResult = undefined;
      const result = find(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
