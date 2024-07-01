let edad = 18;
let cadebaDoble = "Hola, mundo!";
let cadenaSimple = 'Hola, mundo!';
let cadenaFrancesa = `Mi edad es ${edad}
Segunda linea
Tercera linea`;
console.log(cadenaFrancesa);

//Correcto
let saludo = 'Holo, mundo!'

//Incorrecto
let saludoIncorrecto = "hola, mundo!";
console.log(saludoIncorrecto);

let gretting = 'Hello! I\'m Jeferson';
console.log(gretting);

let parte1 = 'Hola';
let parte2 = 'Mundo';
let partecompleta = `${parte1} ${parte2} lkjzshlzsdjf lzjhgdfl`;
console.log(partecompleta);

            //0123456789
let texto = 'Soy un texto'; //Instancias del objeto String()

console.log(texto.length);
console.log(texto.includes("bonito"));
console.log(texto.indexOf("texto"));
console.log(texto.slice(4));
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
let nuevoTexto = texto.replace('texto', 'remplazo');
console.log(nuevoTexto);

let numero = 123;
let textoNumero = numero.toString();
console.log(typeof textoNumero);