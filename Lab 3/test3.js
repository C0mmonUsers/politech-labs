console.log("Завдання 1. Записати висловлювання у вигляді формули логіки висловлювань")
console.log("Для того, щоб вирішити завдання, потрібно знати математику або програмування");

console.log("p — Потрібно знати математику");
console.log("q — Потрібно знати програмування");
console.log("p V q");

console.log("let q = false;\nlet p = true;");

let q = false;
let p = true;

let result = p || q ;
console.log("let result = p || q ;");
console.log(result);





console.log("")
console.log("Завдання 2. Бульова функція f(x,y,z) задана формулою алгебри логіки. Задати цю функцію:");
console.log("1) таблицею істинності;\n2) вектором значень; \n3) порядковим номером; \n4) номерами наборів, на яких f =1.");
console.log("Варіант 5");
console.log("f = ¬x ∧ ((¬y ∧ z) ∨ x ∨ y) ")
console.log("f = (((x ∧ ¬z) ∨ ¬y) ⊕ (¬(z ∨ ¬x)))∨ y")


function f1(x, y, z) {
    return (!x) && (((!y) && z) || x || y);
}

function f2(x, y, z) {
    return (((x && (!z)) || (!y)) ^ (!(z || (!x)))) || y;
}

let vectorF1 = [];
let vectorF2 = [];
let setsF1 = [];
let setsF2 = [];

console.log("Вивід таблиці істинності");
console.log("x y z | f1 | f2");
console.log("----------------");

for (let i = 0; i < 8; i++) {
    let x = (i >> 2) & 1; // старший біт
    let y = (i >> 1) & 1;
    let z = i & 1;        // молодший біт

    let valF1 = f1(x, y, z) ? 1 : 0;
    let valF2 = f2(x, y, z) ? 1 : 0;

    vectorF1.push(valF1);
    vectorF2.push(valF2);

    if (valF1 === 1) setsF1.push(i);
    if (valF2 === 1) setsF2.push(i);

    console.log(`${x} ${y} ${z} |  ${valF1} |  ${valF2}`);
}

// Вектор значень
console.log("\nВектор f1:", vectorF1.join(""));
console.log("Вектор f2:", vectorF2.join(""));

// Порядковий номер (перетворення двійкового в десяткове)
let numF1 = parseInt(vectorF1.join(""), 2);
let numF2 = parseInt(vectorF2.join(""), 2);

console.log("\nПорядковий номер f1:", numF1);
console.log("Порядковий номер f2:", numF2);

// Номери наборів, де f = 1
console.log("\nНомери наборів, де f1 = 1:", setsF1.join(", "));
console.log("Номери наборів, де f2 = 1:", setsF2.join(", "));


