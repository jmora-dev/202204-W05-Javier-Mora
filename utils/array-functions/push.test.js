import { push } from './push.js';

describe('Given function push', () => {
  describe('When receive null as array', () => {
    test('Then should Error', () => {
      const values = [null];
      expect(() => push(...values)).toThrow(Error);
    });
  });

  describe('When receive [] as array and null as values', () => {
    test('Then should array [null] and return 1', () => {
      const values = [[], null];
      const result = push(...values);
      expect(result).toBe(1);
      expect(values[0]).toEqual([null]);
    });
  });

  describe('When receive [] as array and 1,2,3 as values', () => {
    test('Then should array [1,2,3] and return 3', () => {
      const values = [[], 1, 2, 3];
      const result = push(...values);
      expect(result).toBe(3);
      expect(values[0]).toEqual([1, 2, 3]);
    });
  });

  describe('When receive [1,2,3] as array and 4,5,6 as values', () => {
    test('Then should array [1,2,3,4,5,6] and return 6', () => {
      const values = [[1, 2, 3], 4, 5, 6];
      const result = push(...values);
      expect(result).toBe(6);
      expect(values[0]).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
