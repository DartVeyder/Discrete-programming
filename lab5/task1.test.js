// index.test.js
const buildD = require('./task1');

test('buildD builds the correct array', () => {
    const A = ['a', 'b', 'c'];
    const B = ['x', 'y', 'z'];
    const C = ['0', '1'];

    const result = buildD(A, B, C);

    expect(result).toEqual([
        '0ax', '0ay', '0az',
        '0bx', '0by', '0bz',
        '0cx', '0cy', '0cz',
        '1ax', '1ay', '1az',
        '1bx', '1by', '1bz',
        '1cx', '1cy', '1cz'
    ]);
});