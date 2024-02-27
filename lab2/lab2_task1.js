function fn(P, q, r) {
    return P || (!q || r);
}

// Додамо вивід значень вхідних даних та результатів виконання програми
console.log('Вхідні дані та результати:');
console.log('0, 0, 0:', fn(false, false, false));
console.log('0, 0, 1:', fn(false, false, true));
console.log('0, 1, 0:', fn(false, true, false));
console.log('0, 1, 1:', fn(false, true, true));
console.log('1, 0, 0:', fn(true, false, false));
console.log('1, 0, 1:', fn(true, false, true));
console.log('1, 1, 0:', fn(true, true, false));
console.log('1, 1, 1:', fn(true, true, true));

module.exports = { fn }