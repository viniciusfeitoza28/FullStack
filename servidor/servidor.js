require("colors");
var http = require ("http");
var express = require ("express");
var mongodb = require("mongodb");
let bodyParser = require("body-parser")

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://viniftz:giovanna28@vini.2xzk4qv.mongodb.net/?retryWrites=true&w=majority&appName=Vini'
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("Vini");
var usuarios = dbo.collection("usuarios");

var app = express ();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor Rodando..." .rainbow);


// app.get("/inicio",function(requisicao,resposta){
//     resposta.redirect("exercicio/Home.html")
// })

// app.post("/inicio", function(requisicao,resposta){
//     resposta.redirect("exercicio/Home.html")
// })

// // app.get("/cadastrar", function(requisicao,resposta){
// //     let nome = requisicao.query.nome;
// //     let login = requisicao.query.login;
// //     let senha = requisicao.query.senha;
// //     let nasc = requisicao.query.nascimento;

// //     console.log(nome,login,senha,nasc)
    
// // })




// app.post("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.body.nome;
//     let login = requisicao.body.login;
//     let senha = requisicao.body.senha;
//     let nasc = requisicao.body.nascimento;

//     console.log(nome,login,senha,nasc);

//     var data = {db_nome: nome , db_login: login, db_senha: senha,db_nasci:nasc};

//     usuarios.insertOne(data, function(err){
//         console.log(err)
//         if(err){
//             resposta.render("resposta",{status: "Erro!" ,nome,login,senha,nasc});
//         }
//         else{
//             resposta.render("resposta",{status: "Sucesso!", nome,login,senha,nasc});
//         }
//     })

//     // resposta.render("resposta",{nome,login,senha,nasc});
    
// }) 

// app.get("/for_ejs",function(requisicao,resposta){
//     let valor = requisicao.query.valor;
//     resposta.render("exemplo_for",{valor});
// })

// ----------------------------------------------------------------------------------------------------------------
// Lista para armazenar usuários cadastrados
let pessoas = [];

app.get("/", function(req,res){
    res.redirect("exercicio/cadastro.html")
});

app.get("/cadastrar", function(req,res){
    res.redirect("exercicio/cadastro.html")
});

app.get("/login", function(req,res){
    res.redirect("exercicio/login.html")
});

// Cadastro de usuário
app.post("/cadastrar", function(req,res){
    let nome = req.body.Nome;
    let user = req.body.User;
    let senha = req.body.Senha;
    console.log("Cadastro:", nome, user, senha);

    // Adiciona o novo usuário
    pessoas.push({nome, user, senha});

    res.redirect("/login"); // Agora redireciona direto para a tela de login
});

// Login de usuário
app.post("/login", function(req,res){
    let user  = req.body.User;
    let senha = req.body.Senha;
    console.log("Tentativa de login:", user, senha);

    // Procura usuário na lista
    let encontrado = pessoas.find(u => u.user === user && u.senha === senha);

    if (encontrado) {
        // Login correto
        res.render("resposta", {nome: encontrado.nome, user: encontrado.user, senha: encontrado.senha, erro: null});
    } else {
        // Login errado
        res.render("resposta", {nome: null, user: null, senha: null, erro: "Usuário ou senha incorretos!"});
    }
});


//--------------------

// app.post('/logar', function(requisicao,resposta){
//     let login = requisicao.body.login;
//     let senha = requisicao.body.senha;
//     console.log(login,senha);

//     var data = {db_login: login, db_senha: senha}

//     usuarios.find(data).toArray(function(err,item){
//         console.log(item)
//         if(item.length == 0){
//             resposta.render("respostalogin",{status: "usuario/senha não encontrado"})
//         }else if(err){
//             resposta.render("respostalogin",{status: "erro ao logar"})
//         }else {
//             resposta.render("respostalogin",{status: "usuario logado"})
//         }
//     })
// })


