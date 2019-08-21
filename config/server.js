const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// importar arquivos para carregamento das rotas;

const Index = require('../app/routes/index');
const Cadastrousuario = require('../app/routes/cadastroUsuario');

// carregamento de rotas;

app.use('/',Index);
app.use('/cadastro',Cadastrousuario);


module.exports = app;