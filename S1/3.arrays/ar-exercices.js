//Consigue el valor "Volvo" del array de cars y muestralo por consola.

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);

//Cambia el primer elemento de cars a "Ford"

const cars1 = ['Saab', 'Volvo', 'BMW'];
cars1[0] = 'Ford';

//Alerta el numero de elementos en el array usando la propiedad correcta de Array.

/* const cars2 = ["Saab", "Volvo", "BMW"];
alert(cars2.length); */

//Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//Elimina el último elemento del array y muestra el primero y el último por consola.

const RickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
RickAndMortyCharacters1.pop();
console.log(RickAndMortyCharacters1[0],RickAndMortyCharacters1[RickAndMortyCharacters1.length -1]); 

//Elimina el segundo elemento del array y muestra el array por consola.

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
RickAndMortyCharacters.splice(1,1);
console.log(RickAndMortyCharacters);