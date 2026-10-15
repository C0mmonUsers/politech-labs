const A = [1, 3, 5, 7, 9];
const B = [2, 4, 6, 8, 10];

function перетин(a, b) { return a.filter(x => b.includes(x)); }
function різниця(a, b) { return a.filter(x => !b.includes(x)); }
function поєднати(a, b) { return [...new Set(a.concat(b))].sort((x,y)=>x-y); }

const ліва = поєднати(перетин(A, B), різниця(A, B));
console.log('(A∩B)∪(A∖B) =', ліва); // [1, 3, 5, 7, 9]
console.log('A =', A);               // [1, 3, 5, 7, 9]
console.log('Рівні?', JSON.stringify(ліва) === JSON.stringify(A)); // true