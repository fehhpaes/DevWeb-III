//importando os modulos do framework
const express = require('express');
const app = express();

//importando o modulo de rotas que criamos
const loginRoute = require('./routes/loginRoute');

//usando para adicionar o Router ao caminho de gerenciamento de middleware
app.use(loginRoute);

//vamos adicionar o tamplate ejs e o endereçamento das views

app.set('view engine', 'ejs');
app.set('views', './views/login');

app.listen(3000, function(){
    console.log('APP rodando na porta 3000');   
});