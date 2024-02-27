const { test, expect } = require('@jest/globals');
const { fn } = require('./lab2_task1'); // Припустимо, що ваша функція знаходиться у файлі function.js

test('fn returns correct values', () => {
    expect(fn(false, false, false)).toBe(true); // 0 || (0 -> 0) = 1
    expect(fn(false, false, true)).toBe(true); // 0 || (0 -> 1) = 1
    expect(fn(false, true, false)).toBe(false); // 0 || (1 -> 0) = 0
    expect(fn(false, true, true)).toBe(true); // 0 || (1 -> 1) = 1
    expect(fn(true, false, false)).toBe(true); // 1 || (0 -> 0) = 1
    expect(fn(true, false, true)).toBe(true); // 1 || (0 -> 1) = 1
    expect(fn(true, true, false)).toBe(true); // 1 || (1 -> 0) = 1
    expect(fn(true, true, true)).toBe(true); // 1 || (1 -> 1) = 1
});