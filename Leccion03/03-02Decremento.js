a = 3;
b = 2;

//incremento
//pre-incremento (el operador ++ antes de la variable, se asigna a la izq la totalidad de lo que sucede a derecha)
let preIncremento = ++a;
console.log('Resultado del pre-incremento: ' + preIncremento);
console.log(a);

//post-incremento(el operador ++ despues de la variable se asigna el valor a la variable que esta a la izq, y se incrementa la variable a la derecha)
postIncremento = b++;
console.log('Resultado del post-incremento: ' + postIncremento);
console.log(b);

//decremento
//pre-decremento (el operador ++ antes de la variable, se asigna a la izq la totalidad de lo que sucede a derecha)
let preDecremento = --a;
console.log('Resultado del pre-incremento: ' + preDecremento);
console.log(a);

//post-decremento(el operador ++ despues de la variable se asigna el valor a la variable que esta a la izq, y se decrementa la variable a la derecha)
postDecremento = b--;
console.log('Resultado del post-incremento: ' + postDecremento);
console.log(b);
