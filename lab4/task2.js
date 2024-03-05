// Функція для знаходження наступного сполучення
function nextCombination(n, r, arr) {
    let i = r - 1;
    // Знаходимо перший зліва елемент, який можна збільшити
    while (i >= 0 && arr[i] === n - r + i + 1) {
        i--;
    }
    // Якщо такого елемента немає, то сполучення завершені
    if (i === -1) {
        return false;
    }

    arr[i]++; // Збільшуємо цей елемент
    // Заповнюємо решту елементів послідовністю
    for (let j = i + 1; j < r; j++) {
        arr[j] = arr[j - 1] + 1;
    }
    return true;
}

// Головна функція для знаходження всіх сполучень
function combinations(n, r) {
    let arr = Array.from({ length: r }, (_, i) => i + 1); // Початкове сполучення [1, 2, ..., r]
    let result = [arr.slice()]; // Зберігаємо перше сполучення

    while (true) {
        if (!nextCombination(n, r, arr)) { // Знаходимо наступне сполучення
            break;
        }
        result.push(arr.slice()); // Додаємо сполучення до результату
    }

    return result;
}

let n = 5;
let r = 3;
let result = combinations(n, r);
console.log(result.map(c => c.join(' '))); // Виводимо всі сполучення

module.exports = { combinations };