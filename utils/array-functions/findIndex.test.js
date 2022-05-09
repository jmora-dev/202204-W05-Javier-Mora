import { findIndex } from './findIndex.js';

describe('Given function findIndex', () => {
  describe('When receive null', () => {
    test('Then should TypeError', () => {
      const values = [null];
      expect(() => findIndex(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [],null', () => {
    test('Then should TypeError', () => {
      const values = [[], null];
      expect(() => findIndex(...values)).toThrow(
        TypeError('fn parameter must be a function')
      );
    });
  });

  describe('When receive [1,2],(i) => i === 2', () => {
    test('Then should be 1', () => {
      const values = [[1, 2], (i) => i === 2];
      const expectedResult = 1;
      const result = findIndex(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [{a: 1},{a: 1, b:2}],(i) => i.a === 1', () => {
    test('Then should be 0', () => {
      const values = [[{ a: 1 }, { a: 1, b: 2 }], (i) => i.a === 1];
      const expectedResult = 0;
      const result = findIndex(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2],(i) => i === 3', () => {
    test('Then should be -1', () => {
      const values = [[1, 2], (i) => i === 3];
      const expectedResult = -1;
      const result = findIndex(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
