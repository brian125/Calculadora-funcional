const createArray=(a,b)=>Array(b).fill(a);
const suma=(a,b)=>a+b;
const resta=(a,b)=>a-b;
const multiplicacion=(a,b)=>createArray(a,b).reduce(suma,0)
const createArrayDivision=(rango,salto)=>Array.from({ length: rango - 1  }, (_, i) => 
multiplicacion(i+1,salto))
const division=(a,b)=>createArrayDivision(a,b).filter(num=>a>resta(num,b)).reduce((a)=>a+1,0);

console.log(suma(5,2));
console.log(resta(5,2));
console.log(multiplicacion(5,2));
console.log(division(25,5));