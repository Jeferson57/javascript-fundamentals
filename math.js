let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let división = a / b;

console.log(suma, resta, multiplicacion, división);

let x = "10";
let numeroX = Number(x)
let y = 5;

let resultado = numeroX + y;
console.log("Resultado: ", resultado);

let result = 10 + 5 * 2;
console.log("Resultado: " + result);

let result2 = (10 + 5) * 2;
console.log("Resultado: " + result2);

let contador = 10;
contador++;
console.log("Resultado: " + contador);

contador--;
console.log("Resultado: " + contador);

let z = 10;

z += 5;
console.log(z);
z -= 5;
console.log(z);
z *= 5;
console.log(z);
z /= 5;
console.log(z);

let c = 10;
let d = "10";

console.log(c !== d);// Valor y tipo
console.log(c === d);

let aleatorio = Math.random()
console.log("Aleatorio: " + aleatorio);

let redondearAbajo = Math.floor(4.7);
console.log(redondearAbajo);

let redondearArriba = Math.ceil(4.3)
console.log(redondearArriba);