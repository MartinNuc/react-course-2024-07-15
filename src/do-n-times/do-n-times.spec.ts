import {doNTimes} from './do-n-times';

describe('doNTimes', () => {

  it('calls callback three times', () => {
    const fn = jest.fn();
    doNTimes(fn, 3);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});