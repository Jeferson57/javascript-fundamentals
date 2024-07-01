let array = [1, 2, 3, 4, 5];
array[1] = 10;
array.length;
array.indexOf('Hola');
// push y pop
array.push('Banana');
console.log(array);
array.pop();
console.log(array);
// shift y unshift
array.shift()
console.log(array);
array.unshift('Primero')
console.log(array);

// split y join
let myData = 'Ana,Laura,Maria,Pedro,Jose';
let newArray = myData.split(',')
// console.log(myData);
console.log(newArray);

// let cadena = newArray.join(', ');
// console.log(cadena);

// fotEach - Por cada uno
// newArray.forEach(function(elemento) {
//     console.log(`Hola, mi nombre es ${elemento}`);
// })

// map - transormacion
let numeros = [1, 2, 3, 4, 5, 6, 7];
// let doble = numeros.map(function(elemento) {
//     return elemento * 2;
// })

// console.log(doble);

// filter
let result = numeros.filter(function(elemento) {
    return elemento >= 4;
});

console.log(result);