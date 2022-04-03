const express = require("express");
const app = express();

app.get("/atendimentos", (req, res) => {
    res.send("<h1>Você está na rota de atendimentos e está realizando um GET</h1>");
})

app.listen(8081, () => {
    console.log("Servidor de rodando na porta: http://localhost/8081");
    console.log("Para derrubar o servidor: CTRL + C no console");
})