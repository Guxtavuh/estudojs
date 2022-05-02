// importação do modulo do servidor express
const express = require("express");
// criação do aplicativo do servidor express
const app = express();
//  permitir que o servidor trabalhe no formato json
app.use(express.json());
//  Vamos criar a primeira rota do servidor
// Rota raiz
app.get("/", (req, res) => {
  res.send("Olá seja bem vindo, você está na rota raiz.");
});
// definir uma porta de comunicação com um servidor de aplicação
app.listen(5000, () => console.log("on line em http://localhost:5000"));
