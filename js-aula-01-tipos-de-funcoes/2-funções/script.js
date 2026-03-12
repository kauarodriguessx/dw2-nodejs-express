// TIPOS DE FUNÇÕES
// FUNÇÃO SIMPLES
function showMessage() {
  const message = "<h2>Olá, Bem Vindo!</h2>";
  document.write(message);
}

// INVOCANDO A FUNÇÃO
showMessage();

//FUNÇÃO COM PARÂMETRO / ARGUMENTO
const user = "KAUÃ LINDÃO";

function showUserMessage(user) {
  //Essa função recebe um parâmetro
  document.write(`<h3>O que deseja fazer hoje, ${user} ?</h3>`);
}

showUserMessage(user); // Envio de argumento

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 5;

function sum(n1,n2) {
  //Essa função recebe dois parâmetros
  let result = n1 + n2;
  document.write(`<p> A soma de ${n1} + ${n2} é igual a ${result}.</p>`);
}

//INVOCANDO FUNÇÃO
sum(n1 + n2); //Enviando os argumentos

//FUNÇÃO COM RETORNO
const num1 = 50;
const num2 = 3;

//É INDICADO QUE AS FUNÇÕES POSSUAM O MÍNIMO DE RESPONSABILIDADES POSSIVEIS
//ESSA FUNÇÃO IRÁ MULTIPLICAR DOIS NÚMEROS
function mult(num1, num2) {
  return num1 * num2;
}
document.write(`O resultado da multiplicação é : ${mult(num1, num2)}`);

//FUNÇÃO COM RETORNO CONDICIONAL
const number = 8;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p>O número ${number} é ${parImpar(number)}.</p>`);

//FUNÇÃO ANONIMA
const divisao = function (n) {
  return n / 2;
};
let numero = 200;

document.write(`<p>A metade de ${numero} é ${divisao(numero)}.</p>`);

//FUNÇÃO SETA (ARROW FUNCTION) -> É UM TIPO DE FUNÇÃO DE ANÔNIMA
const dobro = (x) => {
    return x * 2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`)

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calculadora = (a, operador, b) => {
    return eval(`${a} ${operador} ${b}`);
};

document.write(`<p>O resultado da operação matemática é : ${calculadora(1000,"/", 2)}</p>`)
