const A = [1, 3, 5, 7, 9];
const B = [2, 4, 6, 8, 10];
const C = [5, 6, 7, 8];
const U = [1,2,3,4,5,6,7,8,9,10];

const a = [];
const b = [];

for (const x of U) {
  const inA = A.includes(x);
  const inB = B.includes(x);
  const inC = C.includes(x);

  // а) A ∪ (B \ C): x належить, якщо (x в A) АБО (x в B і НЕ в C)
  if (inA || (inB && !inC)) a.push(x);

  // б) C Δ (A∩B): x належить, якщо він в рівно одній з двох множин
  const inAperetunB = inA && inB;
  if (inC !== inAperetunB) b.push(x); // XOR: в одній, але не в обох
}

console.log('а)', a); // [1, 2, 3, 4, 5, 7, 9, 10]
console.log('б)', b); // [5, 6, 7, 8]