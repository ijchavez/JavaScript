let a = 3;
let b = 2;
let c = "3";

let z = a == b; // se revisa el valor sin importar el tipo
console.log(z);

z = a == c; // se revisa el valor sin importar el tipo
console.log(z);


z = a === b; // se revisa el valor y tipo
console.log(z);