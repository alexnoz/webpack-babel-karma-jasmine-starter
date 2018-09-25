import add from '../src/add';

describe('Add function', () => {
  it('should be a function', () => {
    expect(typeof add).toBe('function');
  });

  it('should return correct result', () => {
    expect(add(2, 5)).toBe(7);
  });

  it('should return NaN if called without arguments', () => {
    expect(add()).toBeNaN();
  });
});
