let numero, n;
let salir = false;
let volver;

do { 
    cont = 0;
    numero = parseInt(Math.random()*10) +1;
    do {
        do {
            n = prompt("Que número del 1 al 10 crees que he pensado?");
            if(n == null) salir = true;
            else if (isNaN(n) || n<0 || n>10) {
                alert("Número no válido");
                volver = true;
            }
        } while (salir == false && volver == true); 
            cont++;
            if(salir == false) {
                if(numero > n) {
                    alert("Mi número es mayor")
                }
                else if (numero < n) {
                    alert("Mi número es menor")
                }   
            }
        } while (salir == false && n != numero);
            if (salir == false) 
               alert("¡Acertaste Intentos: !" + cont);
        } while (salir == false && confirm("¿Quieres jugar de nuevo?"));
            if (salir) {
                document.write("<h1>Se canceló la partida</h1>");
        }
        else {
            document.write("<h1>Gracias por jugar</h1>");
        };
    

