const spiderman = {
    realName: "Peter Parker",
    power: 70,
    creator: "Stan lee",
    suit: "red",
    alive: true,
};

const ironman = {
    realName: "Ironman",
    power: 80,
    creator: "Stan lee",
    suit: "gold",
    alive: true,
};

console.table(spiderman);
console.table(ironman);
console.table(ironman.realName);
console.table(ironman["realName"])
console.table(`${ironman.realName}`)

spiderman.name = "Pepe";
spiderman.realName = "Pepe";
console.log(spiderman);


