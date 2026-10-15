const A = [1, 3, 5, 7, 9];
const B = [2, 4, 6, 8, 10];

function перетин(a, b) {
    return a.filter(x => b.includes(x));
}

function поєднати(a, b) {
    return [...new Set(a.concat(b))].sort((x, y) => x - y);
}

// Початковий вираз:
// ((A ∪ B) ∩ (A ∪ ∅)) ∪ B

const порожня = [];

// A ∪ B
const крок1 = поєднати(A, B);

// A ∪ ∅
const крок2 = поєднати(A, порожня);

// (A ∪ B) ∩ (A ∪ ∅)
const крок3 = перетин(крок1, крок2);

// ((A ∪ B) ∩ (A ∪ ∅)) ∪ B
const результат = поєднати(крок3, B);

console.log("A ∪ B =", крок1);
console.log("A ∪ ∅ =", крок2);
console.log("(A ∪ B) ∩ (A ∪ ∅) =", крок3);
console.log("Результат =", результат);