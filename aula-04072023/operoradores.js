
let result;

// result = 4 + 5;
// console.log(result)

// result = 9 * 3;
// console.log(result);

// result = ((3 + 7) * 12)/ 6;
// console.log(result);


//operadores de atribuição
//result = result + 30;
// result += 30;
// console.log(result);

// result -= 45;
// console.log(result);

// result *= 7;
// console.log(result);

// result %= 9;
// console.log(result);

// result /= 2;
// console.log(result);

// result **= 2;
// console.log(result);

//operadores Incremento e Decremento

//a++ -> Pós Incremento
//++a-> Pré Incremmento
//a-- -> pós Decremento
//--a-> Pré Decremento

// let a = 23;
// console.log(a);

// //a++;// a += 1;
// console.log(a++);

// console.log(++a);

// console.log(--a);

// console.log(a--);


//operadores Relacionais true false -> boolean
/*
<  -Menor que
>  -Maior que
<= Menor igual
>= Maior igual
== igual a
// === Igual a e mesmo tipo
// ! Diferente
// */



// const n1= 9;
// const n2= 11;
// const n3= 9;
// const n4 = 13;
// const n5 = "11";

// result = n1 < n2;
// console.log(result);//true


// result = n1 > n2;
// console.log(result);//false

// result = n1 <= n3;
// console.log(result);//tru

// result = n2 >= n3;
// console.log(result);//comparação

// result= n3 == n4;
// console.log(result)//false

// result =  n1 != n1;
// console.log(result);//false

// result = n2 == n5;
// console.log(result);//true

// result = n2 === n5;
// console.log(result);//false

// result = "Vanessa norberto" == "Vanessa silva";
// console.log(result);//false


// result = "Vanessa" == "Vanessa";
// console.log(result);//true

// result= 3 === -3;
// console.log(result);//false



//operadores lógicos
/*
   !-> NÃO
   &&-> E
   ||-> OU
  
trabalham diretamente com os valores booleanos

*/

// console.log(true);
// console.log(false);

// && - basta ter um falso que o resultado é falso
// console.log(true && true);//true
// console.log(true && true && true && false);//false
// console.log(false && true);//false

// ||- basta ter um verdadeiro q o result é true
// console.log(true || true); //true
// console.log(false || true); //true
// // console.log(false || false);//false

// //! - negação
// console.log(!true);//false
// console.log(!false);//true


// console.log(!true|| false);//false
// console.log((true || true) && false);//false
// console.log(true || true && false);//true


// let idade =23;
// let calculo= (idade >=18) && (idade <= 65);
// console.log(calculo);

//? operdor ternario
//? verdadeiro : falso
let mensagem;
let nota1= 3;
let nota2= 10;
let condição= ((nota1 + nota2) / 2)>= 7;

mensagem = condição ? "aprovado" : "reprovado";//condição
console.log(mensagem);


// aritmeticos > relacionais > lógicos








