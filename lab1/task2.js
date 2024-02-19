function processBitStrings(a, b, n) {
    let x = "",
        y = "",
        z = "";

    for (let i = 0; i < n; i++) {
        // Знайти c := a[i] OR b[i]
        let c = (a[i] === "1" || b[i] === "1") ? "1" : "0";
        x += c;

        // Знайти c := a[i] AND b[i]
        c = (a[i] === "1" && b[i] === "1") ? "1" : "0";
        y += c;

        // Знайти c := a[i] XOR b[i]
        c = (a[i] !== b[i]) ? "1" : "0";
        z += c;
    }

    return { x, y, z };
}

// Приклад використання
const a = "11100010";
const b = "10101010";
const n = 8;
const result = processBitStrings(a, b, n);
console.log("x:", result.x);
console.log("y:", result.y);
console.log("z:", result.z);

module.exports = processBitStrings;