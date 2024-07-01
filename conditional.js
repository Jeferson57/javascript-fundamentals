
if (edad >= 18) {
    console.log('Eres mayor de edad.');
} else {
    console.log('Eres menor de edad.');
};

// else if - de lo contrario, si
let nota = 45; // Sobresaliente, notable, aporbada o reprobada

if (nota >= 90) {
    console.log('sobresaliente');
} else if (nota >= 80) {
    console.log('Notable');
} else if (nota >= 70) {
    console.log('aprobado');
} else {
    console.log('Reporbado');
};

let a = 5;
let b = 10;

console.log(a === b);
console.log(a === b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

//Operadeores logicos
//&& // AND
//|| // OR
// ! // NOT true/false false/true

let x = 25;
let y = 30;

if (x > 5 && y != 5) {
    console.log('Ambas son verdaderas.');
} else {
    console.log('Una de las condiciones no es verdadera');
}

if ( x > 5 || y < 5) {
    console.log('Almenos una de las condiciones es verdadera.');
}

if (!x > 5) {
    console.log('x no es menor que 5');
}

// undefined, null, 0, Nan, '' <-- False
// ' H', 1  <--True

if (false) {
    console.log('si hay queso!');
} else {
    console.log('No hay queso');
}

//Switch

let dia = 8;
let diaSemana;

switch (dia) {
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = "Miércoles";
        break;
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sábado";
        break;
    case 7:
        diaSemana = "Domingo";
        break;
    default:
        diaSemana = 'Dia no valido';
};

console.log(diaSemana);

//Operador ternario

// condicion ? expresionSiVerdadera : expresionsiFalda
let edad = 14;
let mensaje = (edad >= 18) ? 'Eres maor de edad' : 'Eres menor de edad.'
console.log(mensaje);