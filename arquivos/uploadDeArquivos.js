const fs = require("fs");
const path = require("path");

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const tiposValidos = ["jpg", "png", "jpeg"];
    const tipo = path.extname(caminho);
    const tipoValido = tiposValidos.indexOf(tipo.substring(1));
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;

    if(tipoValido == -1) {
        console.log("Erro, tipo invalido");
    } else {
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on("finish", () => callbackImagemCriada(novoCaminho));
    }
};

