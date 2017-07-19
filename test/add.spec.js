import add from './../src/add';

describe('Add function', () => {
  it('should be a function', done => {
    expect(typeof add).toBe('function');

    done();
  });

  it('should return correct result', done => {
    expect(add(2, 5)).toBe(7);

    done();
  });

  it('should return NaN if called without arguments', done => {
    expect(add()).toBeNaN();

    done();
  });
});
