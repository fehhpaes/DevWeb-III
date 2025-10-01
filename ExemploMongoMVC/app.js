const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRoute = require("./src/routes/userRoute");
app.use(userRoute);

//conexão com o banco
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/Fatec";
const mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro ao conectar ao MongoDB"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
