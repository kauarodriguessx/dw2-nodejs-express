// VARIAVEIS PODEM SER DECLARADAS EM 3 FORMAS :
// VAR, LET E CONST

// VAR: No Geral evite o seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessario reatribuir (não redeclarar) o valor da variavel.
// CONST: Utilize quando NÃO precisar reatribuir o valor da variavel.

var cidade = "Registro";
var cidade = "Sete Barras";
document.write(cidade);

let nome = "Diego";
 nome = "Maria";
document.write("<br>")
document.write(nome);

const pais = "Brasil"
pais = "Argentina"
// O valor de uma constante não pode ser alterado

document.write("<br>")
document.write(pais);