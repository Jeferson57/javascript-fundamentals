let array = ["manzana", "benana", "cereza"];

array.map();
array.filter();

for(let elemento of array) {
    console.log(elemento);
}

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Break -> salir de un bucle ante de tiempo
let numero = 10;
for (let i = 0; i < numero; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

//Continue
for(let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// while
let i = 1;
while(i < 10) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// do... whhile
let t = 1;
do {
    if(t % 2 === 0) {
        t++;
        continue;
    }
    console.log(t);
    t++;

} while(t < 10)

// Reto

const mycats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "Mis gatos se llaman ";

for(let i = 0; i < mycats.length; i++) {
    if (i === mycats.length - 1) {
        myFavoriteCats += `y ${mycats[i]}.`;
    } else {
        myFavoriteCats += `${mycats[i]}, `;
    }
}
console.log(myFavoriteCats);