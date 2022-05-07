import { shift } from './shift.js';

describe('Given function shift', () => {
  describe('When receive null as array', () => {
    test('Then should Error', () => {
      const values = [null];
      expect(() => shift(...values)).toThrow(Error);
    });
  });

  describe('When receive {a:1}', () => {
    test('Then should Error', () => {
      const values = [{ a: 1 }];
      expect(() => shift(...values)).toThrow(Error);
    });
  });

  describe('When receive []', () => {
    test('Then should be array [] and return undefined', () => {
      const values = [[]];
      const result = shift(...values);
      expect(values[0]).toEqual([]);
      expect(result).toBe(undefined);
    });
  });

  describe('When receive [1,2,3]', () => {
    test('Then should be array [2, 3] and return 1', () => {
      const values = [[1, 2, 3]];
      const result = shift(...values);
      expect(values[0]).toEqual([2, 3]);
      expect(result).toBe(1);
    });
  });
});
