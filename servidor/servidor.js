require("colors");
var http = require ("http");
var express = require ("express");
var mongodb = require("mongodb");
let bodyParser = require("body-parser")

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://viniftz:gigi28@vini.2xzk4qv.mongodb.net/?retryWrites=true&w=majority&appName=Vini'
const client = new MongoClient(uri, { useNewUrlParser: true });
const path = require('path');

var dbo = client.db("Vini");
var usuarios = dbo.collection("usuarios");

var app = express ();
app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'exercicio')));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor Rodando..." .rainbow);


app.get("/inicio",function(requisicao,resposta){
    resposta.redirect("exercicio/Home.html")
})

app.post("/inicio", function(requisicao,resposta){
    resposta.redirect("exercicio/Home.html")
})

// app.get("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.query.nome;
//     let login = requisicao.query.login;
//     let senha = requisicao.query.senha;
//     let nasc = requisicao.query.nascimento;

//     console.log(nome,login,senha,nasc)
    
// })




// app.post("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.body.Nome;
//     let login = requisicao.body.Login;
//     let senha = requisicao.body.Senha;
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

//     resposta.render("resposta",{nome,login,senha,nasc});
    
// }) 

// app.get("/for_ejs",function(requisicao,resposta){
//     let valor = requisicao.query.valor;
//     resposta.render("exemplo_for",{valor});
// })

// ----------------------------------------------------------------------------------------------------------------
// Lista para armazenar usuários cadastrados
// let pessoas = [];

// app.get("/", function(req,res){
//     res.redirect("exercicio/cadastro.html")
// });

// app.get("/cadastrar", function(req,res){
//     res.redirect("exercicio/cadastro.html")
// });

// app.get("/login", function(req,res){
//     res.redirect("exercicio/login.html")
// });

// Cadastro de usuário
// app.post("/cadastrar", function(req,res){
//     let Nome = req.body.Nome;
//     let User = req.body.User;
//     let Senha = req.body.Senha;
//     console.log("Cadastro:", Nome, User, Senha);

//     Adiciona o novo usuário
//     pessoas.push({Nome, User, Senha});

//     res.redirect("/login"); // Agora redireciona direto para a tela de login
// });

// Login de usuário
// app.post("/login", function(req,res){
//     let User  = req.body.User;
//     let Senha = req.body.Senha;
//     console.log("Tentativa de login:", User, Senha);

//     Procura usuário na lista
//     let encontrado = pessoas.find(u => u.User === User && u.Senha === Senha);

//     if (encontrado) {
//         Login correto
//         res.render("resposta", {nome: encontrado.Nome, user: encontrado.User, senha: encontrado.Senha, erro: null});
//     } else {
//         Login errado
//         res.render("resposta", {Nome: null, User: null, Senha: null, erro: "Usuário ou senha incorretos!"});
//     }
// });

// app.post('/atualizar_senha',function(requisicao,resposta){
//   let login = requisicao.body.login;
//   let senha = requisicao.body.senha;
//   let novasenha = requisicao.body.novasenha;

//   let data = {db_login: login, db_senha: senha }
//   let new_data = { $set: {db_senha: novasenha}}

//   usuarios.updateOne(data,new_data, function(err,result){
//     console.log(result)
//     console.log(data)
//     console.log(new_data)
//     if (result.modifiedCount == 0) {
//       resposta.render('respostalogin', {status: "Usuário/senha não encontrado!"})
//     }else if (err) {
//       resposta.render('respostalogin', {status: "Erro ao atualizar usuário!"})
//     }else {
//       resposta.render('respostalogin', {status: "Usuário atualizado com sucesso!"})        
//     };
//   })
  

// })

// app.post('/remover_usuario',function(requisicao,resposta){
//   let login = requisicao.body.login;
//   let senha = requisicao.body.senha;

//   let data = {db_login: login, db_senha: senha }

//   usuarios.deleteOne(data,function(err,result){
//     console.log(result)

//     if (result.modifiedCount == 0) {
//       resp.render('respostalogin', {status: "Usuário/senha não encontrado!"})
//     }else if (err) {
//       resp.render('respostalogin', {status: "Erro ao remover usuário!"})
//     }else {
//       resp.render('respostalogin', {status: "Usuário removido com sucesso!"})        
//     };
  
//   })

//   })



// // --------------------

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


// ---------------------------------------------------------------------------------------------------------------------------------


var dbo = client.db("Vini");
var usuarios = dbo.collection("blog");

async function connectDB() {
  try {
    await client.connect();
    db = client.db('blog');
    postsCollection = db.collection('posts');
    console.log('Conectado ao MongoDB!');
    
    Rotas
    app.get('/', (req, res) => {
      res.redirect('/exercicio/Projects.html'); // Redireciona para projetos
    });

    app.get('/blog', async (req, res) => {
      try {
        const posts = await postsCollection.find().sort({ createdAt: -1 }).toArray();
        res.render('blog', { posts }); // Página dinâmica com EJS
      } catch (err) {
        res.status(500).send('Erro ao carregar posts');
      }
    });

    app.get('/cadastrar_post', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'exercicio', 'cadastrar_post.html'));
    });

    app.post('/cadastrar-post', async (req, res) => {
      try {
        const { titulo, resumo, conteudo } = req.body;
        await postsCollection.insertOne({
          titulo,
          resumo,
          conteudo,
          createdAt: new Date()
        });
        res.redirect('/blog');
      } catch (err) {
        res.status(500).send('Erro ao cadastrar post');
      }
    });

    // Inicia servidor na porta 80
    app.listen(80, () => {
      console.log('Servidor rodando na porta 80');
    });
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
}

connectDB();

//----------------------------------------------------------------------------------------



app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Conexão com MongoDB

let db, usuarioscarro, carros;

async function connectDB() {
    try {
        await client.connect();
        db = client.db('vini');
        usuarioscarro = db.collection('usuarioscarro');
        carros = db.collection('carros');
        console.log('Conectado ao MongoDB');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
    }
}

connectDB();

// Rotas
app.get('/', (req, res) => {
    res.redirect('/Projects.html');
});

// Rotas de Usuário
app.get('/cadastro', (req, res) => {
    res.render('cadastro_usuario');
});

app.post('/cadastrar_usuario', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.senha, 10);
        await usuarios.insertOne({
            nome: req.body.nome,
            login: req.body.login,
            senha: hashedPassword
        });
        res.redirect('/login');
    } catch (err) {
        res.render('resposta_usuario', { resposta: "Erro ao cadastrar usuário!" });
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/logar_usuario', async (req, res) => {
    const user = await usuarios.findOne({ login: req.body.login });
    if (user && await bcrypt.compare(req.body.senha, user.senha)) {
        res.redirect('/lista_carros');
    } else {
        res.render('resposta_usuario', { resposta: "Login ou senha incorretos!" });
    }
});

// Rotas de Carros
app.get('/lista_carros', async (req, res) => {
    const listaCarros = await carros.find().toArray();
    res.render('lista_carros', { carros: listaCarros });
});

app.get('/gerenciar_carros', (req, res) => {
    res.render('gerenciar_carros');
});

app.post('/cadastrar_carro', async (req, res) => {
    try {
        await carros.insertOne({
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: parseInt(req.body.ano),
            qtde_disponivel: parseInt(req.body.qtde)
        });
        res.redirect('/lista_carros');
    } catch (err) {
        res.render('resposta_usuario', { resposta: "Erro ao cadastrar carro!" });
    }
});

app.post('/gerenciar_carros', async (req, res) => {
    const filtro = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: parseInt(req.body.ano)
    };

    try {
        switch (req.body.acao) {
            case 'atualizar':
                await carros.updateOne(filtro, {
                    $set: {
                        marca: req.body.novamarca,
                        modelo: req.body.novomodelo,
                        ano: parseInt(req.body.novoano),
                        qtde_disponivel: parseInt(req.body.novaqtde)
                    }
                });
                res.render('resposta_usuario', { resposta: "Carro atualizado com sucesso!" });
                break;

            case 'remover':
                await carros.deleteOne(filtro);
                res.render('resposta_usuario', { resposta: "Carro removido com sucesso!" });
                break;

            case 'vender':
                const carro = await carros.findOne(filtro);
                if (carro.qtde_disponivel > 0) {
                    await carros.updateOne(filtro, {
                        $inc: { qtde_disponivel: -1 }
                    });
                    res.render('resposta_usuario', { resposta: "Carro vendido com sucesso!" });
                } else {
                    res.render('resposta_usuario', { resposta: "Esgotado! Não há mais unidades deste carro." });
                }
                break;
        }
    } catch (err) {
        res.render('resposta_usuario', { resposta: "Erro ao gerenciar carro!" });
    }
});





