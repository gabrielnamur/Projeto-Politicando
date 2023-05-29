var questionarioModel = require("../models/questionarioModel");

var sessoes = [];

function enviarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log("Estou na controller.");
    var resultadoUsuario = req.body.resultado;
    var idUsuario = req.body.idUsuario;

    // Faça as validações dos valores
    if (resultadoUsuario == undefined) {
        console.log("Erro de Resultado do Usuário.")
    } else {
        // Passe os valores como parâmetro e vá para o arquivo questionarioModel.js
        questionarioModel.enviarResultado(resultadoUsuario, idUsuario)
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

function receberResultado(req, res){
    questionarioModel.receberResultado()
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

module.exports = {
    enviarResultado,
    receberResultado
}