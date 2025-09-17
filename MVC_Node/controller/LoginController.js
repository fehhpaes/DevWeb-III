//Importando a classe
const loginModel = require('../models/LoginModel')

//instanciando a classe
const login = new loginModel()
//acessando o metodo e armazenando o retorno na variavel
const logged = login.isLogged();

exports.getLogin = ((req, res) => {
//exibe o texto na tela
res.send(`<h1>${logged}</h1`)
})

//renderiza o conteúdo da variável logged na view LoginView
exports.getIsLogged = ((req, res) =>{
    res.render("LoginView", {logged : logged});

});