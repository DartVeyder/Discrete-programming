function bitwiseSetOperations(U, A, B) {
    // Sort the elements of the universe in ascending order
    U.sort((a, b) => a - b);

    // Initialize bitsets for A and B
    const Abit = new Array(U.length).fill(0);
    const Bbit = new Array(U.length).fill(0);

    // Create bitsets for A and B
    for (let i = 0; i < U.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (U[i] === A[j]) {
                Abit[i] = 1;
                break;
            }
        }
        for (let j = 0; j < B.length; j++) {
            if (U[i] === B[j]) {
                Bbit[i] = 1;
                break;
            }
        }
    }

    // Calculate bitsets for intersection, union, difference, and XOR
    const AperB = Abit.map((a, i) => a & Bbit[i]);
    const AobB = Abit.map((a, i) => a | Bbit[i]);
    const ArizB = Abit.map((a, i) => a & ~Bbit[i]);
    const AxorB = Abit.map((a, i) => (a ^ Bbit[i]) & 1);

    // Print results
    console.log("Bitset of A:", Abit.join(""));
    console.log("Bitset of B:", Bbit.join(""));
    console.log("Bitset of A ∩ B:", AperB.join(""));
    console.log("Bitset of A ∪ B:", AobB.join(""));
    console.log("Bitset of A \\ B:", ArizB.join(""));
    console.log("Bitset of A ⊕ B:", AxorB.join(""));

    // Return the result object
    return { Abit, Bbit, AperB, AobB, ArizB, AxorB };
}
// Example usage
const U = [1, 2, 3, 4, 5];
const A = [2, 4];
const B = [3, 5];

bitwiseSetOperations(U, A, B);

module.exports = bitwiseSetOperations;