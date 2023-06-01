var avaliardeputadosModel = require("../models/avaliardeputadosModel");

var sessoes = [];

function enviarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log("Estou na controller.");
    var resultadoUsuario = req.body.deputadogosta;
    var idUsuario = req.body.idUsuario;

    // Faça as validações dos valores
    if (resultadoUsuario == undefined) {
        console.log("Erro de Resultado do Usuário.")
    } else {
        // Passe os valores como parâmetro e vá para o arquivo questionarioModel.js
        questionarioModel.enviarResultado(deputadogosta, idUsuario)
            .then(
                function (deputadogosta) {
                    res.json(deputadogosta);
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
function deputados_positivamente(req, res) {
    var positivo = req.body.votosPositivosServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    // Passe os valores como parâmetro e vá para o arquivo questionarioModel.js
    avaliardeputadosModel.deputados_positivamente(positivo, idUsuario)
        .then(
            function (resposta) {
                res.json(resposta);
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

function deputados_negativamente(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log("Estou na controller.");
    var negativo = req.body.votosNegativosServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (negativo == undefined) {
        console.log("Valor do negativo ta undefined")
    } else if (idUsuario == undefined) {
        console.log("Idusuario está undefined")
    } else {
        // Passe os valores como parâmetro e vá para o arquivo questionarioModel.js
        avaliardeputadosModel.deputados_negativamente(negativo, idUsuario)
            .then(
                function (deputadongosta) {
                    res.json(deputadongosta);
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
    enviarResultado,
    deputados_positivamente,
    deputados_negativamente,
}