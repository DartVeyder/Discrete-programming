// combinations.test.js
const { combinations } = require('./task2');

describe('combinations', () => {
    test('combinations of 5 choose 3', () => {
        const result = combinations(5, 3);
        expect(result).toEqual([
            [1, 2, 3],
            [1, 2, 4],
            [1, 2, 5],
            [1, 3, 4],
            [1, 3, 5],
            [1, 4, 5],
            [2, 3, 4],
            [2, 3, 5],
            [2, 4, 5],
            [3, 4, 5]
        ]);
    });

    test('combinations of 4 choose 2', () => {
        const result = combinations(4, 2);
        expect(result).toHaveLength(6); // 4 choose 2
        // You can add more specific expectations if needed
    });
});