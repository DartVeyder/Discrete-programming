// Функція для знаходження наступної перестановки
function nextPermutation(arr) {
    // Знаходимо найбільше і, для якого arr[i] < arr[i+1]
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    // Якщо такого і немає, то перестановки завершені
    if (i >= 0) {
        // Знаходимо найбільше j, для якого arr[j] > arr[i]
        let j = arr.length - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }
        // Міняємо місцями arr[i] та arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Перевертаємо підмасив arr[i+1...n] для отримання наступної перестановки
    reverse(arr, i + 1);
}

// Функція для перевертання масиву з позиції start до кінця
function reverse(arr, start) {
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Головна функція для знаходження всіх перестановок
function permutations(n) {
    // Створюємо початкову перестановку [1, 2, ..., n]
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    let result = [arr.slice()]; // Зберігаємо першу перестановку

    while (true) {
        nextPermutation(arr); // Знаходимо наступну перестановку
        // Якщо досягли початкової перестановки, то завершуємо
        if (arr.join('') === Array.from({ length: n }, (_, i) => i + 1).join('')) {
            break;
        }
        result.push(arr.slice()); // Додаємо перестановку до результату
    }

    return result;
}

let n = 3;
let result = permutations(n);
console.log(result.map(p => p.join(' '))); // Виводимо всі перестановки

module.exports = { permutations };