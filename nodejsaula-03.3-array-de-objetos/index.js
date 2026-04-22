// O arquivo index.js é o arquivo principal do projeto

// Importanto o MÓDULO do express
const express = require("express");

// Criando uma instancia do Express
const app = new express();

// Configurando o EJS
app.set("view engine", "ejs");

//Criando a rota principal do site("/")
app.get("/", function (req, res) {
  // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>")
  res.render("index");
});

//CRIANDO A ROTA DE PERFIL DE USÚARIO
app.get("/perfil", function (req, res) {
  //res.send("<h2>Bem-vindo ao seu perfil!</h2>")
  res.render("perfil");
});

app.get("/clientes", (req, res) => {
  const listaClientes = ["Kauazinho","joaozinho","kevinho","thaizinha","eliaszinho",];
  res.render("clientes", {
    listaClientes: listaClientes,
  });
});

//ROTA COM PARAMETRO
app.get("/clientes/:cliente", function (req, res) {
  const cliente = req.params.cliente;
  res.render("detalhesClientes", {
    cliente: cliente,
  });
});

//ROTA SEM PARAMETRO
app.get("/produtos", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  res.render("produtos", {
    //Enviando variaveis para pagina HTML

    listaProdutos: listaProdutos,
  });
});

//ROTA COM PARAMETRO
app.get("/produtos/:produto", function (req, res) {
  const produto = req.params.produto;
  res.render("detalhesProduto", {
    produto: produto,
  });
});

app.get("/servicos", function (req, res) {
  //res.send("<h2>Bem-vindo a area de produtos!</h2>")
  res.render("servicos");
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});
