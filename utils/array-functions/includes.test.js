import { includes } from './includes.js';

describe('Given function includes', () => {
  describe('When receive null', () => {
    test('Then should TypeError', () => {
      const values = [null];
      expect(() => includes(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [1,2], 2', () => {
    test('Then should be true', () => {
      const values = [[1, 2], 2];
      const expectedResult = true;
      const result = includes(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2],3', () => {
    test('Then should be false', () => {
      const values = [[1, 2], 3];
      const expectedResult = false;
      const result = includes(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
