
// пара (x, y) у відношенні
function has(relation, x, y) {
    for (const p of relation) {
        if (p.x === x && p.y === y) return true;
    }
    return false;
}

// відношення у вигляді (x,y) 
function show(name, relation) {
    const text = relation.map(p => "(" + p.x + "," + p.y + ")").join(" ");
    console.log(name + " [" + relation.length + "]: " + text);
}


//  ЗАВДАННЯ 2 
// Бінарне відношення P1: (x - y) ділиться на 3
// P2: x від -1 до 1, y від 1 до 3

const A = [-3, -2, -1, 0, 1, 2, 3];
const B = [1, 2, 3, 4, 5, 6];

const P1 = [];
const P2 = [];

// перебираємо всі пари з A × B
for (const x of A) {
    for (const y of B) {
        if ((x - y) % 3 === 0) P1.push({ x, y });
        if (x >= -1 && x <= 1 && y >= 1 && y <= 3) P2.push({ x, y });
    }
}

console.log("=== ЗАВДАННЯ 2 ===");
show("P1", P1);
show("P2", P2);


//  ЗАВДАННЯ 3 
// Операції над відношеннями P1 та P2

const union = [];          // P1 ∪ P2
const intersection = [];   // P1 ∩ P2
const diff1 = [];          // P1 \ P2
const diff2 = [];          // P2 \ P1

for (const p of P1) {
    if (has(P2, p.x, p.y)) intersection.push(p);
    else diff1.push(p);
    union.push(p);
}

for (const p of P2) {
    if (!has(P1, p.x, p.y)) {
        diff2.push(p);
        union.push(p);
    }
}

const symDiff = diff1.concat(diff2);   // P1 Δ P2

console.log("\n=== ЗАВДАННЯ 3 ===");
show("P1 ∪ P2", union);
show("P1 ∩ P2", intersection);
show("P1 \\ P2", diff1);
show("P2 \\ P1", diff2);
show("P1 Δ P2", symDiff);


//  ЗАВДАННЯ 4 
// Композиції відношень: R1 = P1 ∘ Q, R2 = P2 ∘ Q
// Q: x < y, де x з {0, 1}, y з {0..5}

const C = [0, 1];
const D = [0, 1, 2, 3, 4, 5];
const Q = [];

for (const x of C) {
    for (const y of D) {
        if (x < y) Q.push({ x, y });
    }
}

// (x, z) входить у композицію, якщо існує y: (x, y) ∈ P і (y, z) ∈ Q
function compose(P, Q) {
    const result = [];
    for (const p of P) {
        for (const q of Q) {
            if (p.y === q.x && !has(result, p.x, q.y)) {
                result.push({ x: p.x, y: q.y });
            }
        }
    }
    return result;
}

const R1 = compose(P1, Q);
const R2 = compose(P2, Q);

console.log("\n=== ЗАВДАННЯ 4 ===");
show("Q", Q);
show("R1 = P1 ∘ Q", R1);
show("R2 = P2 ∘ Q", R2);


//  ЗАВДАННЯ 5 
// Властивості відношення R: x < y на множині {1..5}

// Перевірка трьох властивостей
function checkProperties(relation, elements) {
    // Рефлексивність: для кожного x є пара (x, x)
    let reflexive = true;
    for (const x of elements) {
        if (!has(relation, x, x)) reflexive = false;
    }

    // Симетричність: для кожної (x, y) є (y, x)
    let symmetric = true;
    for (const p of relation) {
        if (!has(relation, p.y, p.x)) symmetric = false;
    }

    // Транзитивність: якщо (x, y) і (y, z), то є (x, z)
    let transitive = true;
    for (const p of relation) {
        for (const q of relation) {
            if (p.y === q.x && !has(relation, p.x, q.y)) transitive = false;
        }
    }

    return { reflexive, symmetric, transitive };
}

function printProperties(r) {
    console.log("Рефлексивність:", r.reflexive);
    console.log("Симетричність:", r.symmetric);
    console.log("Транзитивність:", r.transitive);
    console.log("Еквівалентність:", r.reflexive && r.symmetric && r.transitive);
}

const N = [1, 2, 3, 4, 5];
const R = [];

for (const x of N) {
    for (const y of N) {
        if (x < y) R.push({ x, y });
    }
}

console.log("\n=== ЗАВДАННЯ 5: x < y ===");
show("R", R);
printProperties(checkProperties(R, N));


//  ЗАВДАННЯ 6 
// Відношення x² + y² = 1, де x, y ∈ Z
// Достатньо брати {-1, 0, 1}: при |x| ≥ 2 маємо x² ≥ 4 > 1

const Z = [-1, 0, 1];
const circle = [];

for (const x of Z) {
    for (const y of Z) {
        if (x * x + y * y === 1) circle.push({ x, y });
    }
}

console.log("\n=== ЗАВДАННЯ 6: x² + y² = 1 ===");
show("Відношення", circle);
printProperties(checkProperties(circle, Z));