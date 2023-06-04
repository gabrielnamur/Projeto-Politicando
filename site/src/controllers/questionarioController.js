var questionarioModel = require("../models/questionarioModel");

var sessoes = [];

function enviarResultado(req, res) {
    console.log("Estou na controller.");
    var resultadoUsuario = req.body.resultado;
    var idUsuario = req.body.idUsuario;

    if (resultadoUsuario == undefined) {
        console.log("Erro de Resultado do Usuário.")
    } else {
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