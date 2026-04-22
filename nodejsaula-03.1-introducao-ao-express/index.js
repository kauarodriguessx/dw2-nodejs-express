// O arquivo index.js é o arquivo principal do projeto

// Importanto o MÓDULO do express
const express = require("express")

// Criando uma instancia do Express
const app = new express()

// Configurando o EJS
app.set('view engine', 'ejs')

//Criando a rota principal do site("/")
app.get("/", function(req,res) {
    // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>")
    res.render("index")
});

//CRIANDO A ROTA DE PERFIL DE USÚARIO
app.get("/perfil", function(req,res) {
    //res.send("<h2>Bem-vindo ao seu perfil!</h2>")
    res.render("perfil")
});
app.get("/clientes", function(req,res) {
    //res.send("<h2>Bem-vindo a area de clientes!</h2>")
    res.render("clientes")
});
app.get("/produtos", function(req,res) {
    //res.send("<h2>Bem-vindo a area de produtos!</h2>")
    res.render("produtos")
});

app.get("/servicos", function(req,res) {
    //res.send("<h2>Bem-vindo a area de produtos!</h2>")
    res.render("servicos")
});


// Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else {
        console.log(`Servidor iniciado com sucesso no endereço: http://localhost:${port}`);
    }   
});