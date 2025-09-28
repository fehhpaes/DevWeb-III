// controllers/veiculoController.js

const veiculoModel = require('../models/veiculoModel'); 

module.exports = {
    // 1. LISTAGEM (GET /veiculos)
    listar: (req, res) => {
        const veiculos = veiculoModel.listarTodos();
        // Renderiza a view 'listagem.ejs', passando a lista de veículos
        res.render('listagem', { veiculos });
    },

    // 2. FORMULÁRIO DE CADASTRO (GET /veiculos/novo)
    formCadastro: (req, res) => {
        // Renderiza a view 'cadastro.ejs' para um novo veículo
        res.render('cadastro', { veiculo: null, titulo: "Cadastrar Novo Veículo" });
    },

    // 3. SALVAR (POST /veiculos)
    salvar: (req, res) => {
        const { nome } = req.body;
        veiculoModel.adicionar(nome);
        // Após salvar, redireciona o usuário para a lista
        res.redirect('/veiculos');
    },

    // 4. FORMULÁRIO DE EDIÇÃO (GET /veiculos/editar/:id)
    formEdicao: (req, res) => {
        const id = req.params.id;
        const veiculo = veiculoModel.buscarPorId(id);

        if (veiculo) {
            // Renderiza a view 'cadastro.ejs', passando os dados do veículo para pré-preencher o formulário
            res.render('cadastro', { veiculo, titulo: `Editar Veículo ${veiculo.id}` });
        } else {
            res.status(404).send('Veículo não encontrado.');
        }
    },

    // 5. ATUALIZAR (POST /veiculos/editar/:id)
    atualizar: (req, res) => {
        const id = req.params.id;
        const { nome } = req.body;

        veiculoModel.editar(id, nome);
        res.redirect('/veiculos');
    },

    // 6. EXCLUIR (POST /veiculos/excluir/:id)
    excluir: (req, res) => {
        const id = req.params.id;
        veiculoModel.excluir(id);
        res.redirect('/veiculos');
    }
};