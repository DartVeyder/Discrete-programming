const processBitStrings = require('./task2');
const { test, expect } = require('@jest/globals');

test('Process Bit Strings', () => {
    const a = "11100010";
    const b = "10101010";
    const n = 8;
    const expectedResult = {
        x: "11101010",
        y: "10100010",
        z: "01001000"
    };

    const result = processBitStrings(a, b, n);

    expect(result).toEqual(expectedResult);
});