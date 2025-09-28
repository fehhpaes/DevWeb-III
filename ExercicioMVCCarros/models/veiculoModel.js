// veiculoModel.js

// Banco de dados simulado em memória
let veiculos = [
    { id: 1, nome: "Fiat Palio" },
    { id: 2, nome: "Chevrolet Celta" },
    { id: 3, nome: "Marea Turbo" }
];
let nextId = veiculos.length + 1;

module.exports = {
    // Método: LISTAR TODOS
    listarTodos: () => {
        return veiculos;
    },

    // Método: BUSCAR POR ID
    buscarPorId: (id) => {
        return veiculos.find(v => v.id == id);
    },

    // Método: ADICIONAR
    adicionar: (nome) => {
        const novoVeiculo = { id: nextId++, nome };
        veiculos.push(novoVeiculo);
        return novoVeiculo;
    },

    // Método: EDITAR
    editar: (id, nome) => {
        const index = veiculos.findIndex(v => v.id == id);
        if (index !== -1) {
            veiculos[index].nome = nome;
            return veiculos[index];
        }
        return null; // Retorna nulo se não encontrar
    },

    // Método: EXCLUIR
    excluir: (id) => {
        const index = veiculos.findIndex(v => v.id == id);
        if (index !== -1) {
            const veiculoExcluido = veiculos.splice(index, 1);
            return veiculoExcluido[0];
        }
        return null; // Retorna nulo se não encontrar
    }
};