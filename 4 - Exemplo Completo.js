const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const veiculos = [{ id: 1, nome: "fiat" }, { id: 2, nome: "Celta" }, { id: 3, nome: "Marea" }]

//first endpoint
app.get('/', (req, res) => {
    res.send(veiculos)
})

app.post('/', (req, res) => {
    const {id, nome} = req.body
    veiculos.push({id:id, nome:nome})
    res.send(veiculos)
})

app.put('/', (req, res) => {
   const index = veiculos.findIndex(x=>x.id == req.query.id);
   veiculos[index] = {id:req.query.id, nome:req.body.nome}   
    res.send(JSON.stringify(veiculos))
})

app.delete('/', (req, res) => {
   const index = veiculos.findIndex(x=>x.id == req.query.id);
   veiculos.splice(index,1)
    res.send(JSON.stringify(veiculos))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
