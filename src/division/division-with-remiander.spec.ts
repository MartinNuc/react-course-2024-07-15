import { divideWithRemainder } from './division-with-remiander';

describe('divideWithRemainder', () => {
  describe('result', () => {
    it('divides 10/5=2', () => {
      const { result } = divideWithRemainder(10, 5);
      expect(result).toBe(2);
    });

    it('divides 10/3=2', () => {
      const { result } = divideWithRemainder(10, 3);
      expect(result).toBe(3);
    });

    it('divides -5/5=-1', () => {
      const { result } = divideWithRemainder(-5, 5);
      expect(result).toBe(-1);
    });
  });

  describe('remainder', () => {
    it('divides 10/5 with remainder 0', () => {
      const { remainder } = divideWithRemainder(10, 5);
      expect(remainder).toBe(0);
    });

    it('divides 11/5 with remainder 1', () => {
      const { remainder } = divideWithRemainder(11, 5);
      expect(remainder).toBe(1);
    });

    it('divides 2/-5 with remainder 2', () => {
      const { remainder } = divideWithRemainder(2, -5);
      expect(remainder).toBe(2);
    });
  });

  it('throws error on division by 0', () => {
    expect(() => divideWithRemainder(-5, 0)).toThrow('Cannot divide by zero.');
  });
});
