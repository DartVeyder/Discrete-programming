// bitwiseSetOperations.test.js

const bitwiseSetOperations = require('./task2');

test('bitwise set operations', () => {
    const U = [1, 2, 3, 4, 5];
    const A = [2, 4];
    const B = [3, 5];

    const result = bitwiseSetOperations(U, A, B);
    expect(result.Abit).toEqual([0, 1, 0, 1, 0]);
    expect(result.Bbit).toEqual([0, 0, 1, 0, 1]);
    expect(result.AperB).toEqual([0, 0, 0, 0, 0]);
    expect(result.AobB).toEqual([0, 1, 1, 1, 1]);
    expect(result.ArizB).toEqual([0, 1, 0, 1, 0]);
    expect(result.AxorB).toEqual([0, 1, 1, 1, 1]);


});