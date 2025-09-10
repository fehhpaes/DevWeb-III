const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.use(express.json());
const productos = [
    {id:1, name: 'Notebook', userId: 1},
    {id:2, name: 'Mouse', userId: 2}

];

app.get('/products', async (req, res) => {
    try{
        //buscar usuários no User Services
        const {data: users} = await axios.get('http://localhost:3001/users');
    
    //juntar os dados de usuários com os produtos
    const productsWithUser = productos.map(prod => ({
    ...prod,
    user: users.find(u => u.id === prod.userId)    
    }));

    res.json(productsWithUser);
} catch (err){
    res.status(500).json({message: 'Erro ao buscar usuários'});
}
});

app.listen(PORT, () => {
    console.log(`Product Service rodando em http://localhost:${PORT}`);
});






