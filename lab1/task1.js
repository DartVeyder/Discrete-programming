// logic.js
function conjunction(p, q) {
    return p && q;
}

function disjunction(p, q) {
    return p || q;
}

function exclusiveOr(p, q) {
    return p !== q;
}

function implicationPtoQ(p, q) {
    return !p || q;
}

function implicationQtoP(p, q) {
    return !q || p;
}

function equivalence(p, q) {
    return (!p || q) && (!q || p);
}

// Ввід значень p та q
const p = true;
const q = false;

// Обчислення та виведення результатів
console.log("p:", p);
console.log("q:", q);
console.log("Conjunction (p && q):", conjunction(p, q));
console.log("Disjunction (p || q):", disjunction(p, q));
console.log("Exclusive Or (p XOR q):", exclusiveOr(p, q));
console.log("Implication (p -> q):", implicationPtoQ(p, q));
console.log("Implication (q -> p):", implicationQtoP(p, q));
console.log("Equivalence (p ~ q):", equivalence(p, q));

module.exports = {
    conjunction,
    disjunction,
    exclusiveOr,
    implicationPtoQ,
    implicationQtoP,
    equivalence,
};