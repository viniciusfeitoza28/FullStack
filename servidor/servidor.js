require("colors");
var http = require ("http");
var express = require ("express");

var app = express ();
app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);

console.log("Servidor Rodando..." .rainbow);


app.get("/inicio",function(requisicao,resposta){
    resposta.redirect("exercicio/Home.html")
})

app.post("/inicio", function(requisicao,resposta){
    resposta.redirect("exercicio/Home.html")
})

app.get("/cadastrar", function(requisicao,resposta){
    let nome = requisicao.query.nome;
    let login = requisicao.query.login;
    let senha = requisicao.query.senha;
    let nasc = requisicao.query.nascimento;

    console.log(nome,login,senha,nasc)
    
})

