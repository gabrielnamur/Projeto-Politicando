var deputadosModel = require("../models/deputadosModel");

var sessoes = [];

function deputados_positivamente(req, res) {
    var positivo = req.body.votosPositivosServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    // Passe os valores como parâmetro e vá para o arquivo questionarioModel.js
    deputadosModel.deputados_positivamente(positivo, idUsuario)
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
        deputadosModel.deputados_negativamente(negativo, idUsuario)
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

function pegarDeslikes(req, res) {
    deputadosModel.pegarDeslikes()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                if (resultado.length >= 1) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.status(403).send("Não encontrou nenhum voto");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pegarlikes(req, res) {
    deputadosModel.pegarlikes()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                if (resultado.length >= 1) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.status(403).send("Não encontrou nenhum voto");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    deputados_positivamente,
    deputados_negativamente,
    pegarDeslikes,
    pegarlikes
}