function buildD(A, B, C) {
    let D = [];
    let j = 0;

    for (let iC = 0; iC < C.length; iC++) {
        for (let iA = 0; iA < A.length; iA++) {
            for (let iB = 0; iB < B.length; iB++) {
                D[j] = C[iC] + A[iA] + B[iB];
                j++;
            }
        }
    }

    return D;
}

let A = ['a', 'b', 'c'];
let B = ['x', 'y', 'z'];
let C = ['0', '1'];

let D = buildD(A, B, C);

console.log(D);

module.exports = buildD;