const fs = require("fs");
const { readGraphFromFile, stepinVershyn, isolated_or_solo_nodes } = require('./task1.js');

describe('readGraphFromFile', () => {
    test('should read graph from file correctly', () => {
        const filename = './lab7/lb7.txt';
        const graph = readGraphFromFile(filename);

        expect(graph).toEqual(expect.objectContaining({
            n: expect.any(Number),
            m: expect.any(Number),
            edges: expect.any(Array)
        }));
    });


});

describe('stepinVershyn', () => {
    test('should calculate stepin correctly', () => {
        const graph = {
            edges: [{ v: 1, u: 2 }, { v: 2, u: 1 }, { v: 3, u: 0 }]
        };
        const stepin = stepinVershyn(graph);

        expect(stepin).toEqual({ '1': 1, '2': 1, '3': 0 });
    });
});

describe('isolated_or_solo_nodes', () => {
    test('should categorize nodes correctly', () => {
        const stepin = { '1': 0, '2': 1, '3': 1 };
        const result = isolated_or_solo_nodes(stepin);

        expect(result).toEqual({
            'Ізольовані': ['1'],
            'Висячі': ['2', '3']
        });
    });
});