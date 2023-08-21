//Escreva um programa que verique se um numero é par ou impar

let num= 35;
let condição;
let mensagem;

condicao= (num % 2)== 0;
mensagem= condicao ?"par": "impar;";
console.log(mensagem);


//Faça um programa que calcule a média aritmética de três números.
let N1= 6;
let N2 = 12;
let N3= 32;
let media;

media= (N1+N2+N3)/3;
console.log(" a media é ");
console.log(media);

//Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.

let numb=15;
let mensagem2;
let condicao1 = ((numb % 3) == 0) && ((numb % 5)==0);
mensagem2= condicao1 ? "divide por 3 e 5": "não é dividio pelo 3 e 5.";
console.log(mensagem2);

//Faça um programa que calcule a área de um triângulo com base e altura

let area;
let altura= 4;
let base = 10;
area= (base*altura)/2;
console.log(area);

//Escreva um programa que converta uma temperatura de graus Celsius para Fahrenhei
let Celsius=30;
let fahrenhei= Celsius * 1.8 +32;
console.log(fahrenhei);

//Faça um programa que calcule o delta das funções de segundo grau.


let a= 2;
let b = 4;
let c = 8;
let mensagem3;

let delta= b ** 2 - 4 * a * c;
console.log("o valor do delta é ");
console.log(delta);

//Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).


let pessoa= 34;
let mensgem;
let condicao4= pessoa >=18 || pessoa <=18;
mensgem = condicao4 ?"pode digirir":"não pode dirigir";
console.log(mensgem);
