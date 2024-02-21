import merge from '../src/mergeSort';

describe('merge function', () => {
  it('should merge three sorted arrays', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [6, 4, 2];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual([6, 6, 5, 4, 4, 3, 2, 2, 1]);
  });
});
