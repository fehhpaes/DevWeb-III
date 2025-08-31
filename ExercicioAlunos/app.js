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
},
{
  "ra": "3",
  "nome": "Janaina",
  "turma": "DSM",
  cursos: ["Matematica"]
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
});


app.put('/alunos/:ra', (req, res) => {
  const ra = req.params.ra;
  const {nome, turma} = req.body;
  
  const alunoIndex = alunos.findIndex(x => x.ra == req.body.ra );
  //alunos[alunoIndex] = {ra: req.query.ra, nome: req.body.nome, turma: req.body.turma};
  
  alunos[alunoIndex].nome = nome;
  alunos[alunoIndex].turma = turma;


  res.send(JSON.stringify(alunos));
});



app.put('/alunos/:ra/cursos/:cursoIndex', (req, res) => {
  const {ra, cursoIndex} = req.params;
  const {novoCurso} = req.body;
  const aluno = alunos.find(a => a.ra === ra);
  
  const index = Number(cursoIndex);
  aluno.cursos[index] = novoCurso;

  res.send(JSON.stringify(aluno.cursos));
  //inserir "novoCurso" ao invés de "curso" quando for fazer a solicitação body no Postman
  
});


app.delete('/alunos/:ra', (req, res) => {
  const {ra} = req.params;
  const alunoIndex = alunos.findIndex(a => a.ra === ra);
  const aluno = alunos.splice(alunoIndex, 1);
  //alunos.splice(alunoIndex, 1);
  res.send(JSON.stringify(alunos));
})





app.get('/alunos', (req, res) => {
  res.send(JSON.stringify(alunos));
});

app.get('/alunos/:ra', (req, res) => {
  const ra = req.params.ra;
  const aluno = alunos.find(a => a.ra === ra);

  res.send(JSON.stringify(aluno));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})