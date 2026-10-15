const A = [1, 3, 5, 7, 9];
const B = [2, 4, 6, 8, 10];
const C = [5, 6, 7, 8];

function перетин(a, b) { return a.filter(x => b.includes(x)); }
function поєднати(a, b) { return [...new Set(a.concat(b))].sort((x,y)=>x-y); }

// Ліва частина: A∪(B∩C)
const ліва = поєднати(A, перетин(B, C));

// Права частина: (A∪B)∩(A∪C)
const права = перетин(поєднати(A, B), поєднати(A, C));

console.log('Ліва:', ліва);
console.log('Права:', права);
console.log('Рівні?', JSON.stringify(ліва) === JSON.stringify(права)); // true