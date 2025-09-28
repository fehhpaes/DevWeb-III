
const express = require('express');
const app = express();
// Importa o arquivo de rotas que criamos na pasta routes
const veiculoRoutes = require('./routes/veiculoRoutes'); 
const port = 3000;

// Configuração do EJS para as Views
app.set('view engine', 'ejs');
app.set('views', './views'); 

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// --- Configuração das Rotas ---

// Rota base (Redireciona para a listagem)
app.get('/', (req, res) => res.redirect('/veiculos'));

// Define que TODAS as rotas no veiculoRoutes.js (ex: /novo, /editar/:id)
// serão acessadas com o prefixo /veiculos
app.use('/veiculos', veiculoRoutes); 

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});