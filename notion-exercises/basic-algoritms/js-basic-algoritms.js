                            //**Iteración #1: Variables**//

//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

let myFavoriteHero = "Hulk";
console.log(myFavoriteHero);

//1.2 Crea una variable llamada x, asigna el valor 50 a ella.

let x = 50;
console.log(x);

//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 

let h = 5;
let y = 10;

//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

let z = h + y;
console.log(z);

                                        /* Iteración #2: Variables avanzadas */

 //1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

//1.2 Declara 3 variables con los nombres y valores siguientes 

	/* firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24;  */

    let firstName = 'Jon'; 
	let lastName = 'Snow'; 
	let age = 24; 

/* Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */

    console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);


/* 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes. */

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. */

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1.finalPrice);
console.log(car2.finalPrice);

                                                  /* Iteración #3: Operadores */

/* 1.1 Multiplica 10 por 5 y muestra el resultado mediante alert. */

let a = 10;
let b = 5;
//alert(a * b);

/* 1.2 Divide 10 por 2 y muestra el resultado en un alert. */

let c = 2;
//alert(a/c);

/* 1.3 Muestra mediante un alert el resto de dividir 15 por 9. */

let d = 15;
let e = 9;
//alert(d/e);

/* 1.4 Usa el correcto operador de asignación que resultará en j = 15, 
teniendo dos variables */
let f = 10 ;
let g = 5;
let j = f + g;
console.log(j);

/* 1.5 Usa el correcto operador de asignación que resultará en m = 50,
teniendo dos variables */
let k = 10;
let l = 5;
let m = k * l;
console.log(m);

                                                   /* **Iteración #4: Arrays** */
                                                  
                                                   
/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola. */
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN" */
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1[0] = "IRONMAN";
console.log(avengers1);

/* 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array. */
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//alert(avengers2.length);

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer".  
Muestra en consola el último personaje del array*/
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. */
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();
console.log(rickAndMortyCharacters1[0],rickAndMortyCharacters1[rickAndMortyCharacters1.length -1]);

/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1,1);
console.log(rickAndMortyCharacters2);

/* Iteración #5: Condicionales */

/* En base al código siguiente, muestra los mensajes correctos por consola. */

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 !== number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
                                               
/* Iteración #6: Bucles */

/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */

for(i = 0; i < 10; i++) {
    console.log(i);
};

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

for(i = 0; i < 10; i++) {
    console.log(i % 2 === 0);
};

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */

for(i = 0; i < 10; i++) {
    if(i >= 9) {
    console.log("Dormido");
} else {
    console.log("Intentando dormir")
    }
}; 