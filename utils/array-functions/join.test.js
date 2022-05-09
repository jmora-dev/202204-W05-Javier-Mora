import { join } from './join.js';

describe('Given function join', () => {
  describe('When not receive parameters', () => {
    test('Then should ""', () => {
      const expectedResult = '';
      const result = join();
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive null', () => {
    test('Then should be TypeError', () => {
      const values = [null];
      expect(() => join(...values)).toThrow(
        TypeError('array parameter must be a array')
      );
    });
  });

  describe('When receive [], ", "', () => {
    test('Then should ""', () => {
      const values = [[], ', '];
      const expectedResult = '';
      const result = join(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2,3], ", "', () => {
    test('Then should "1, 2, 3"', () => {
      const values = [[1, 2, 3], ', '];
      const expectedResult = '1, 2, 3';
      const result = join(...values);
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive [1,2,3], false', () => {
    test('Then should "1, 2, 3"', () => {
      const values = [[1, 2, 3], false];
      const expectedResult = '1false2false3';
      const result = join(...values);
      expect(result).toBe(expectedResult);
    });
  });
});
