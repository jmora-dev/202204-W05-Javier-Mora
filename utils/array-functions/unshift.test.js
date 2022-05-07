import { unshift } from './unshift.js';

describe('Given function shift', () => {
  describe('When receive null', () => {
    test('Then should Error', () => {
      const values = [null];
      expect(() => unshift(...values)).toThrow(Error);
    });
  });

  describe('When receive {a:1}, 1', () => {
    test('Then should Error', () => {
      const values = [{ a: 1 }, 1];
      expect(() => unshift(...values)).toThrow(Error);
    });
  });

  describe('When receive []', () => {
    test('Then should []', () => {
      const values = [[]];
      const result = unshift(...values);
      expect(result).toBe(0);
      expect(values[0]).toEqual([]);
    });
  });

  describe('When receive [],1,2', () => {
    test('Then should be array [1,2] and return 2', () => {
      const values = [[], 1, 2];
      const result = unshift(...values);
      expect(result).toBe(2);
      expect(values[0]).toEqual([1, 2]);
    });
  });

  describe('When receive [3,4],1,2', () => {
    test('Then should be array [1,2,3,4] and return 4', () => {
      const values = [[3, 4], 1, 2];
      const result = unshift(...values);
      expect(result).toBe(4);
      expect(values[0]).toEqual([1, 2, 3, 4]);
    });
  });
});
