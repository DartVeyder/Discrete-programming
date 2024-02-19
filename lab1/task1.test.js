// logic.test.js
const logic = require('./task1');

test('conjunction', () => {
    expect(logic.conjunction(true, true)).toBe(true);
    expect(logic.conjunction(true, false)).toBe(false);
    expect(logic.conjunction(false, true)).toBe(false);
    expect(logic.conjunction(false, false)).toBe(false);
});

test('disjunction', () => {
    expect(logic.disjunction(true, true)).toBe(true);
    expect(logic.disjunction(true, false)).toBe(true);
    expect(logic.disjunction(false, true)).toBe(true);
    expect(logic.disjunction(false, false)).toBe(false);
});

test('exclusiveOr', () => {
    expect(logic.exclusiveOr(true, true)).toBe(false);
    expect(logic.exclusiveOr(true, false)).toBe(true);
    expect(logic.exclusiveOr(false, true)).toBe(true);
    expect(logic.exclusiveOr(false, false)).toBe(false);
});

test('implicationPtoQ', () => {
    expect(logic.implicationPtoQ(true, true)).toBe(true);
    expect(logic.implicationPtoQ(true, false)).toBe(false);
    expect(logic.implicationPtoQ(false, true)).toBe(true);
    expect(logic.implicationPtoQ(false, false)).toBe(true);
});

test('implicationQtoP', () => {
    expect(logic.implicationQtoP(true, true)).toBe(true);
    expect(logic.implicationQtoP(true, false)).toBe(true);
    expect(logic.implicationQtoP(false, true)).toBe(false);
    expect(logic.implicationQtoP(false, false)).toBe(true);
});

test('equivalence', () => {
    expect(logic.equivalence(true, true)).toBe(true);
    expect(logic.equivalence(true, false)).toBe(false);
    expect(logic.equivalence(false, true)).toBe(false);
    expect(logic.equivalence(false, false)).toBe(true);
});