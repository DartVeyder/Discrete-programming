const { AdjacencyMatrix } = require('./task1');


describe('AdjacencyMatrix', () => {
    test('should return the correct adjacency matrix', () => {
        const graph = {
            n: 3,
            m: 2,
            edges: {
                1: [2],
                2: [3],
                3: []
            }
        };

        const expectedMatrix = [
            [0, 1, 0],
            [0, 0, 1],
            [0, 0, 0]
        ];

        expect(AdjacencyMatrix(graph)).toEqual(expectedMatrix);
    });
});