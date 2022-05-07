import { length } from './length.js';

describe('Given function length', () => {
  describe('When receive []', () => {
    test('Then should 0', () => {
      const value = [];
      const expectedResult = 0;
      const result = length(value);
      expect(result).toBe(expectedResult);
    });
  });
  describe('When receive [1,2,3]', () => {
    test('Then should 3', () => {
      const value = [1, 2, 3];
      const expectedResult = 3;
      const result = length(value);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive null', () => {
    test('Then should throw Error', () => {
      const value = null;
      expect(() => length(value)).toThrow(Error);
    });
  });

  describe('When receive 1', () => {
    test('Then should throw Error', () => {
      const value = 1;
      expect(() => length(value)).toThrow(Error);
    });
  });

  describe('When receive {a:1}', () => {
    test('Then should throw Error', () => {
      const value = { a: 1 };
      expect(() => length(value)).toThrow(Error);
    });
  });
});
