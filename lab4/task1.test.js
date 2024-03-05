const { permutations } = require('./task1');

describe('permutations', () => {
    test('permutations of 3 elements', () => {
        const result = permutations(3);
        expect(result).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ]);
    });

    test('permutations of 4 elements', () => {
        const result = permutations(4);
        expect(result).toHaveLength(24); // 4!
        // You can add more specific expectations if needed
    });
});