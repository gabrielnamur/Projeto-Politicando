var database = require("../database/config")

function enviarResultado(emailUsuario, senhaUsuario) {
    console.log("Acessei o Questionário Model na função enviarResultado");

    var instrucao = `SELECT idUsuario FROM Usuário WHERE email = "${emailUsuario}" AND senha = "${senhaUsuario}"`;

    console.log("Executando a instrução SQL: \n" + instrucao);

    var resultado = database.executar(instrucao);
    var idUsuario = resultado[0]; //.idUsuario
    console.log(idUsuario);

    return idUsuario;
}

function receberResultado() {
    console.log('ACESSEI O MODEL NA FUNCAO RECEBER RESULTADO')
    var instrucao = "SELECT COUNT(resultado) qtdVotos, resultado FROM Questionário group by resultado;";
    return database.executar(instrucao);
}

function deputados_positivamente(positivo, idUsuario) {
    console.log("Estou na deputados_positivamente(positivo) model");
    var instrucao = `
        INSERT INTO VotaçãoGosta(deputadogosta, fkUsuario) VALUES ('${positivo}', '${idUsuario}');
    `
    return database.executar(instrucao);
}

function deputados_negativamente(negativo, idUsuario) {
    console.log("Estou na deputados_positivamente(positivo) model");
    var instrucao = `
        INSERT INTO VotaçãoNGosta(deputadonGosta, fkUsuario) VALUES ('${negativo}', '${idUsuario}');
    `
    return database.executar(instrucao);

}

function pegarDeslikes() {
    console.log("Estou na pegar deslikes model");
    var instrucao = `
     select count(idVotação) as qtdDeslikes, deputadongosta as nomeDeputado from votaçãongosta group by nomeDeputado; 
    `
    return database.executar(instrucao);
}

function pegarlikes() {
    console.log("Estou na pegar likes model");
    var instrucao = `
     select count(idVotação) as qtdlikes, deputadogosta as nomeDeputado from votaçãogosta group by nomeDeputado; 
    `
    return database.executar(instrucao);
}

module.exports = {
    enviarResultado,
    receberResultado,
    deputados_positivamente,
    deputados_negativamente,
    pegarDeslikes,
    pegarlikes
};