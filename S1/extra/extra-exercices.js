//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
    {
        name: "Abel", 
        years: 43
    }, 
    {
        name: "Maria", 
        years: 18
    }, 
    {
        name: "Pedro", 
        years: 14
    }, 
    {
        name: "Samantha",
         years: 32
    }, 
    {
        name: "Raquel",
         years: 16
    }
];

for(let user of users) {
    if(user.years < 18) {
        console.log(user.name + " usuarios menores de edad");
    } else {
        console.log(user.name + " usuarios mayores de edad");
    }
};

//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {
        name: "Salad",
         isVegan: true
    },
    {
        name: "Salmon",
        isVegan: false
    }, 
    {
        name: "Tofu",
        isVegan: true
    }, 
    {
        name: "Burger", 
        isVegan: false
    },
    {
        name: "Rice", 
        isVegan: true
    }, 
    {
        name: "Pasta", 
        isVegan: true
    }
];

for(i = 0; i < foodSchedule.length; i++) {
    let food = foodSchedule[i];
    if(!food.isVegan){
        food.name = fruits.shift();
    }
};

console.log(foodSchedule);

//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
let shortMovies = [];
let longMovies = [];
let mediumMovies = [];
const movies = [
    {
        name: "Your Name", 
        durationInMinutes: 130
    },
    {
        name: "Pesadilla antes de navidad", 
        durationInMinutes: 225
    }, 
    {
        name: "Origen", 
        durationInMinutes: 165
    }, 
    {
        name: "El señor de los anillos", 
        durationInMinutes: 967
    }, 
    {
        name: "Solo en casa", 
        durationInMinutes: 214
    }, 
    {
        name: "El jardin de las palabras", 
        durationInMinutes: 40
    }
];




