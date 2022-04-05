module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        res.send("<h1>Você está na rota de atendimentos e está realizando um GET</h1>");
    });

    app.post("/atendimentos", (req, res) => {
        console.log(req.body);
        res.send("<h1>Você está na rota de atendimentos e está realizando um POST</h1>");
    });
};