const express = require('express')
const app = express()
const port = 3000


app.use(express.json())

let alunos = [{
  "ra": "1",
  "nome": "Aurora",
  "turma": "DSM",
  cursos: ["Matematica","Desenvolvimento Web III", "Técnicas de Programação"]
},
{
  "ra": "2",
  "nome": "Bruno",
  "turma": "ADS",
  cursos: []
}];



app.post('/alunos', (req, res) => {
  const {ra, nome, turma} = req.body
  const novoAluno = {ra, nome, turma, cursos:[]};
  //const novoAluno = {ra, nome, turma, cursos:[curso1,curso2,curso3,curso4,curso5,curso6,curso7]};
  alunos.push(novoAluno);
  
  res.send(JSON.stringify(novoAluno));
});

app.post('/alunos/:ra/cursos', (req, res) => {
  const {ra} = req.params;
  const cursos = {cursos:[]} = req.body;
  const aluno = alunos.find(a => a.ra === ra);
 
  aluno.cursos.push(cursos);

  res.send(JSON.stringify(aluno.cursos));
})


app.put('/', (req, res) => {
  // const index = alunos.findIndex(x => x.ra == req.body.ra );
  // alunos[index] = {ra: req.query.ra, nome: req.body.nome, turma: req.body.turma, cursos: req.body.cursos};
  // res.send(JSON.stringify(alunos));
})

app.delete('/', (req, res) => {
  // const index = alunos.findIndex(x => x.ra == req.query.ra );
  // //const indexCurso = cursos.findIndex(y => y.id == req.query.id );
  // alunos.splice(index, 1);
  // //cursos.splice(indexCurso, 1)
  // res.send(JSON.stringify(alunos));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})