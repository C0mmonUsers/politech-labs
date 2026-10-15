const A = [1, 3, 5, 7, 9];
const Б = [2, 4, 6, 8, 10];

const Д = [1, 2, 3, 4, 5, 6];
const Е = [5, 6, 7, 8, 9, 10];

function перетин(a, b) {
    return a.filter(x => b.includes(x));
}

function різниця(a, b) {
    return a.filter(x => !b.includes(x));
}

function поєднати(a, b) {
    return [...new Set(a.concat(b))].sort((x, y) => x - y);
}

function симетричнаРізниця(a, b) {
    return поєднати(
        різниця(a, b),
        різниця(b, a)
    );
}

// (A ∪ Б)
const крок1 = поєднати(A, Б);

// (Д Δ Е)
const крок2 = симетричнаРізниця(Д, Е);

// (A ∪ Б) ∩ (Д Δ Е)
const крок3 = перетин(крок1, крок2);

// Д ∩ Е
const крок4 = перетин(Д, Е);

// ((A ∪ Б) ∩ (Д Δ Е)) ∪ (Д ∩ Е)
const результат = поєднати(крок3, крок4);

console.log("A ∪ Б =", крок1);
console.log("Д Δ Е =", крок2);
console.log("(A ∪ Б) ∩ (Д Δ Е) =", крок3);
console.log("Д ∩ Е =", крок4);
console.log("Результат області №5 =", результат);