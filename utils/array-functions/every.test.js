import { every } from './every.js';

describe('Given function some', () => {
  describe('When receive null', () => {
    test('Then should TypeError', () => {
      const values = [null];
      expect(() => every(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [],null', () => {
    test('Then should TypeError', () => {
      const values = [[], null];
      expect(() => every(...values)).toThrow(
        TypeError('fn parameter must be a function')
      );
    });
  });

  describe('When receive [1,1],(i) => i === 1', () => {
    test('Then should be true', () => {
      const values = [[1, 1], (i) => i === 1];
      const expectedResult = true;
      const result = every(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2],(i) => i === 1', () => {
    test('Then should be false', () => {
      const values = [[1, 2], (i) => i === 1];
      const expectedResult = false;
      const result = every(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
