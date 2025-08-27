const express = require('express')
const app = express()
const port = 3000


app.use(express.json())

let alunos = [];
let cursos = [];

//first endpoint
app.get('/', (req, res) => {
  res.send(alunos);
  res.send(cursos);
})

app.post('/', (req, res) => {
  const {ra, nome, turma, cursos} = req.body;

  alunos.push({ra:ra, nome:nome, turma:turma, cursos:cursos});
 
 res.send(JSON.stringify(alunos));
});

app.put('/', (req, res) => {
  const index = alunos.findIndex(x => x.ra == req.body.ra );
  alunos[index] = {ra: req.query.ra, nome: req.body.nome, turma: req.body.turma, cursos: req.body.cursos};
  res.send(JSON.stringify(alunos));
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})