// routes/veiculoRoutes.js
const express = require('express');
const router = express.Router();
// Importa o Controller 
const veiculoController = require('../controllers/veiculoController'); 

// Rotas para Veículos

// Listagem de veículos (GET /)
router.get('/', veiculoController.listar);

// Formulário para novo veículo (GET /novo)
router.get('/novo', veiculoController.formCadastro);

// Ação de SALVAR um novo veículo (POST /)
router.post('/', veiculoController.salvar);

// Formulário de edição por ID (GET /editar/:id)
router.get('/editar/:id', veiculoController.formEdicao);

// Ação de ATUALIZAR um veículo (POST /editar/:id)
router.post('/editar/:id', veiculoController.atualizar);

// Ação de EXCLUIR um veículo (POST /excluir/:id)
router.post('/excluir/:id', veiculoController.excluir);

module.exports = router; // Exporta o objeto router