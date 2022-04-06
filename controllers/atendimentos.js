const Atendimento = require("../models/atendimentos");

module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        res.send("<h1>Você está na rota de atendimentos e está realizando um GET</h1>");
    });

    app.post("/atendimentos", (req, res) => {
        console.log("Atendimento enviado");
        Atendimento.adiciona(req.body);
        res.send("Post atendimento");
    });
};