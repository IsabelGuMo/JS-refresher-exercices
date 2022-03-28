let comida = ["tomate", "chocolate", "pan", "cebolla", ];

let fechas = [1921, 1923, 2001, 2003];

let mix = ["tomate", 3, true];

let numeros = [2, 6, 1, 22, 4, 54, 123, 3, 10 ]

let jedi = [
    {
        name: "Luke",
        saber: "Blue",
    },
    {
        name: "Yoda",
        saber: "Green",
    },
];

const bestJedi = jedi[0];
console.log(bestJedi.name);

comida.push("zumos");
console.log("PUSH", comida);

comida.reverse();
console.log("Reverse", comida);

comida.shift();
console.log("SHIFT", comida);

numeros.sort((a, b) => a-b);
console.log("SORT", numeros);

comida.splice(0, 1, "queso", "yogurt");
console.log("SPLICE", comida);

comida.unshift("lechuga");
console.log("UNSPLICE", comida);

let nums = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9];

const newNums = nums.concat(nums2);
console.log("CONCAT", newNums);

console.log("JOIN", newNums.join("🐞"));

console.log("SLICE", comida.slice(0, 2));

console.log("TOSTRING", comida.toString());

console.log("INDEXOF", comida.indexOf("pan"));

comida.push("pan");
console.log("LASTINDEXOF", comida.lastIndexOf("pan"));

const mascotas = ["perro", "gato", "loro", "chinchilla"];
console.log("INCLUDES", mascotas.includes("perro"));
console.log("INCLUDES", mascotas.includes("hamster"));
