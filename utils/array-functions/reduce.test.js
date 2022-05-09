import { reduce } from './reduce.js';

describe('Given function map', () => {
  describe('When receive null', () => {
    test('Then should be TypeError', () => {
      const values = [null];
      expect(() => reduce(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When not receive parameters', () => {
    test('Then should be TypeError', () => {
      expect(() => reduce()).toThrow(
        TypeError('Reduce of empty array with no initial value')
      );
    });
  });

  describe('When receive []', () => {
    test('Then should be TypeError', () => {
      const values = [];
      expect(() => reduce(...values)).toThrow(
        TypeError('Reduce of empty array with no initial value')
      );
    });
  });

  describe('When receive [1]', () => {
    test('Then should be 1', () => {
      const values = [[1]];
      expect(() => reduce(...values)).toThrow(
        TypeError('fn parameter must be a function')
      );
    });
  });

  describe('When receive [1],(a,b) => a+b', () => {
    test('Then should be 1', () => {
      const values = [[1], (a, b) => a + b];
      const expectedResult = 1;
      const result = reduce(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2,3,4,5],(a,b) => a+b', () => {
    test('Then should be 15', () => {
      const values = [[1, 2, 3, 4, 5], (a, b) => a + b];
      const expectedResult = 15;
      const result = reduce(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive ["h","o","l","a"],(a,b) => a+b', () => {
    test('Then should be "hola"', () => {
      const values = [['h', 'o', 'l', 'a'], (a, b) => a + b];
      const expectedResult = 'hola';
      const result = reduce(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2,3,4,5],(a,b) => a+b, 15', () => {
    test('Then should be 30', () => {
      const values = [[1, 2, 3, 4, 5], (a, b) => a + b, 15];
      const expectedResult = 30;
      const result = reduce(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive ["h","o","l","a"],(a,b,i) => a+i, 0', () => {
    test('Then should be 6', () => {
      const values = [['h', 'o', 'l', 'a'], (a, b, i) => a + i, 0];
      const expectedResult = 6;
      const result = reduce(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive ["h","o"],(a,b,i,arr) => a+arr.length, 0', () => {
    test('Then should be 4', () => {
      const values = [['h', 'o'], (a, b, i, arr) => a + arr.length, 0];
      const expectedResult = 4;
      const result = reduce(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
