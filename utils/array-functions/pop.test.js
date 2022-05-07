import { pop } from './pop.js';

describe('Given function pop', () => {
  describe('When receive null', () => {
    test('Then should Error', () => {
      const values = [null];
      expect(() => pop(...values)).toThrow(Error);
    });
  });

  describe('When receive {a:1}', () => {
    test('Then should Error', () => {
      const values = [{ a: 1 }];
      expect(() => pop(...values)).toThrow(Error);
    });
  });

  describe('When receive []', () => {
    test('Then should be array [] and return undefined', () => {
      const values = [[]];
      const result = pop(...values);
      expect(values[0]).toEqual([]);
      expect(result).toBe(undefined);
    });
  });

  describe('When receive [1,2,3]', () => {
    test('Then should be array [1,2] and return 3', () => {
      const values = [[1, 2, 3]];
      const result = pop(...values);
      expect(values[0]).toEqual([1, 2]);
      expect(result).toBe(3);
    });
  });
});
