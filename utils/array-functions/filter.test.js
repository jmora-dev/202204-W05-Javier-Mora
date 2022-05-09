import { filter } from './filter.js';

describe('Given function filter', () => {
  describe('When receive null', () => {
    test('Then should TypeError', () => {
      const values = [null];
      expect(() => filter(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [],null', () => {
    test('Then should TypeError', () => {
      const values = [[], null];
      expect(() => filter(...values)).toThrow(
        TypeError('fn parameter must be a function')
      );
    });
  });

  describe('When receive [1,2,2],(i) => i === 2', () => {
    test('Then should be [2,2]', () => {
      const values = [[1, 2, 2], (i) => i === 2];
      const expectedResult = [2, 2];
      const result = filter(...values);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive [{a: 1},{a: 1, b:2}],(i) => i.a === 1', () => {
    test('Then should be [{a: 1},{a: 1, b:2}]', () => {
      const values = [[{ a: 1 }, { a: 1, b: 2 }], (i) => i.a === 1];
      const expectedResult = [{ a: 1 }, { a: 1, b: 2 }];
      const result = filter(...values);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('When receive [1,2],(i) => i === 3', () => {
    test('Then should be []', () => {
      const values = [[1, 2], (i) => i === 3];
      const expectedResult = [];
      const result = filter(...values);
      expect(result).toEqual(expectedResult);
    });
  });
});
