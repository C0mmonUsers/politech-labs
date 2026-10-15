const A = [1, 3, 5, 7, 9];
const B = [2, 4, 6, 8, 10];
const C = [5, 6, 7, 8];
const U = [1,2,3,4,5,6,7,8,9,10];

function різниця(a, b) {
  return a.filter(x => !b.includes(x));
}
function перетин(a, b) {
  return a.filter(x => b.includes(x));
}
function поєднати(a, b) {
  return [...new Set(a.concat(b))];
}
function доповнення(a, universe) {
  return різниця(universe, a); // то шо в U а не в А
}

// --- (A'∪B)'∩C ---
const A_ = доповнення(A, U);           // крок 1: A'
const крок2 = поєднати(A_, B);          // крок 2: A'∪B
const крок3 = доповнення(крок2, U);     // крок 3: (A'∪B)'
const result = перетин(крок3, C);       // крок 4: перетин з C

console.log("A' =", A_);
console.log("A'∪B =", крок2);
console.log("(A'∪B)' =", крок3);
console.log("(A'∪B)'∩C =", result); // [5, 7]

// --- Булеан (множина всіх підмножин) ---
function булеан(множина) {
  let результат = [[]]; 
  for (const el of множина) {
    const нові = результат.map(підмн => [...підмн, el]);
    результат = результат.concat(нові);
  }
  return результат;
}

const P = булеан(result);
console.log("Булеан:", P);
console.log("Потужність булеана:", P.length); // 2^2 = 4