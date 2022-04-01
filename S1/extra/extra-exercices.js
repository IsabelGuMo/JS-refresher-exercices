//1.Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

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

//2.Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

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

//3.Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
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

for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
     if(movie.durationInMinutes < 100 ) {
        shortMovies.push(movie);
    } else if(movie.durationInMinutes > 200 ) {
        longMovies.push(movie);
    } else {
        mediumMovies.push(movie);
    }
};

console.log("SHORT",shortMovies,"MEDIUM" ,mediumMovies, "LONG",longMovies);

//4.Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.

const products1 = [
    {
        name: 'Gorra de rodilla', 
        sellCount: 10
    },
    {
        name: 'Pantalón de pana', 
        sellCount: 302
    },
    {
        name: 'Reloj de papel albal', 
        sellCount: 23
    },
    {
        name: 'Inpar de zapatos', 
        sellCount: 6
    }
];

let total = 0;

for (const product of products1) {
    total += product.sellCount;
}

console.log(total);


//6.Usa un bucle para recorrer el array de peliculas (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.
const goodProducts = [];
const badProducts = [];
const products = [
    {
        name: 'Gorra de rodilla', 
        sellCount: 10
    },
    {
        name: 'Pantalón de pana', 
        sellCount: 302
    },
    {
        name: 'Reloj de papel albal', 
        sellCount: 23
    },
    {
        name: 'Inpar de zapatos', 
        sellCount: 6
    }
];

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    if(product.sellCount > 20) {
        goodProducts.push(product);
    } else {
        badProducts.push(product);
    }
};
console.log("GOOD",goodProducts,"BAD", badProducts);