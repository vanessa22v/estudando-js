//tipagem estatica -> definição de um tipo a cada variavél(Java,C,C++,TypeScript)
//tipagem dinamica  -> o tipo da variavel e definido dde acordo com seu valo(JS,Python)
//typeof-> operador retorna o tipo da variavel

//let variavel=50
///variavel="texto"
//variavel=true

let variavel =22;
console.log(typeof variavel);

variavel="Professor";
console.log(typeof variavel);

variavel=true;
console.log(typeof variavel);

/*let bicho1= "gato";
let bicho2= "cachorro";
console.log(typeof bicho1+bicho2);*/

variavel = {nome:"Vanessa Norberto", idade: 21};//obejto
console.log(typeof variavel);

variavel = [1,2,4,5,4]
console.log(typeof variavel);

variavel = function() { return 1 }
console.log(typeof variavel);//fuction



let teste;
console.log(teste);//indefinido

variavel= null;// objeto nulo
console.log(variavel);

variavel= NaN; // not a number
console.log(variavel);

console.log(30/0);//infinity


const a = 0;
const b = 0;
console.log(a/b);

