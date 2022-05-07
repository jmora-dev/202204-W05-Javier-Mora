import { some } from './some.js';

describe('Given function some', () => {
  describe('When receive null', () => {
    test('Then should TypeError', () => {
      const values = [null];
      expect(() => some(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [],null', () => {
    test('Then should TypeError', () => {
      const values = [[], null];
      expect(() => some(...values)).toThrow(
        TypeError('fn parameter must be a function')
      );
    });
  });

  describe('When receive [1,2],(i) => i === 2', () => {
    test('Then should be true', () => {
      const values = [[1, 2], (i) => i === 2];
      const expectedResult = true;
      const result = some(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2],(i) => i === 3', () => {
    test('Then should be false', () => {
      const values = [[1, 2], (i) => i === 3];
      const expectedResult = false;
      const result = some(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
