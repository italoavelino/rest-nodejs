const customExpress = require("./config/customExpress");

const app = customExpress();

app.listen(8081, () => {
    console.log("Servidor de rodando na porta: http://localhost/8081");
    console.log("Para derrubar o servidor: CTRL + C no console");
});