let name = prompt("Escriba su nombre");
let lastName = prompt("Escriba sus apellidos");
let age = prompt("Escriba su edad");
let salary = prompt("Escriba su salario");

if(salary <1000) {
    if(age <30) 
        salary = 1100;
    else if(age <= 45)
        salary*= 1.03; 
    else salary*=1.15
};

if(salary <=2000) {
    if(age <45)
        salary*= 1.03;
    else if (age >=45)
        salary*= 1.1;
}

document.write(
    `<p> Persona: ${name} ${lastName}, `+ `Edad: ${age} años` + ` Salario ${salary} </p>`);

