// Вихідні множини
const A = [1, 3, 5, 7, 9];
const B = [2, 4, 6, 8, 10];
const C = [5, 6, 7, 8];

// --- Базові операції над множинами ---

// Різниця: залиш з a тільки те, чого немає в b
function різниця(a, b) {
  return a.filter(x => !b.includes(x));
}

// Перетин: залиш з a тільки те, що є і в b
function перетин(a, b) {
  return a.filter(x => b.includes(x));
}

// Об'єднання: зліпити два масиви в один без повторів
function поєднати(a, b) {
  return [...new Set(a.concat(b))];
}

// Симетрична різниця: (a без b) + (b без a)
function симетричнаРізниця(a, b) {
  return поєднати(різниця(a, b), різниця(b, a));
}

// --- а) A ∪ (B ∖ C) ---
const BbezC = різниця(B, C);          
const resultA = поєднати(A, BbezC);   

console.log('B ∖ C =', BbezC);
console.log('а) A ∪ (B ∖ C) =', resultA);

// --- б) C Δ (A ∩ B) ---
const AperetunB = перетин(A, B);              
const resultB = симетричнаРізниця(C, AperetunB); 

console.log('A ∩ B =', AperetunB);
console.log('б) C Δ (A ∩ B) =', resultB);