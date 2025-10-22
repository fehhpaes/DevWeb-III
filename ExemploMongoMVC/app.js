require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//importa o middleware de autenticação por api key
const apiKeyAuth = require('./src/middleware/apiKeyAuth')
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

//rota para a documentação da api
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

//protege todas as rotas com api key
app.use(apiKeyAuth);




const userRoute = require('./src/routes/userRoute')
const projectRoute = require('./src/routes/projectRoute')

//conexão com o banco
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
const mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDb'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoute); 
//app.use(userRoute, apiKeyAuth); rota protegida por api key
app.use(projectRoute);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
