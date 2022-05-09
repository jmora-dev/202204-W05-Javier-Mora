import { indexOf } from './indexOf.js';

describe('Given function indexOf', () => {
  describe('When receive null', () => {
    test('Then should TypeError', () => {
      const values = [null];
      expect(() => indexOf(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [1,2],2', () => {
    test('Then should be 1', () => {
      const values = [[1, 2], 2];
      const expectedResult = 1;
      const result = indexOf(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2],3', () => {
    test('Then should be -1', () => {
      const values = [[1, 2], 3];
      const expectedResult = -1;
      const result = indexOf(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
