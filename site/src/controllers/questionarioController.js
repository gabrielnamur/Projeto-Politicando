var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function enviarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var resultadoUsuario = req.body.resultado;

    // Faça as validações dos valores
    if (resultadoUsuario == undefined) {
       console.log("Erro de Resultado do Usuário.")
    }else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        questionarioModel.enviarResultado(resultadoUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}