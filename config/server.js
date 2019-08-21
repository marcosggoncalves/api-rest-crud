const express = require('express');

const bodyParser = require('body-parser');
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use((req, res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});



// importar arquivos para carregamento das rotas;

const Index = require('../app/routes/index');

// carregamento de rotas;

app.use('/',Index);



module.exports = app;