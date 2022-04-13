const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/database/conexao");
const Tabelas = require("./infraestrutura/database/tabelas");

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log("Conectado com sucesso");

        Tabelas.init(conexao);

        const app = customExpress();

        app.listen(8081, () => {
            console.log("Servidor de rodando na porta: http://localhost:8081");
            console.log("Para derrubar o servidor: CTRL + C no console");
        }); 
    }
});

