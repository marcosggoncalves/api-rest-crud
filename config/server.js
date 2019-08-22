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

const Cadastrousuario = require('../app/routes/Usuario');

// carregamento de rotas;

app.use('/usuario',Cadastrousuario);


module.exports = app;