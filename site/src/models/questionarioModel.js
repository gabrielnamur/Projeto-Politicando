var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(dadosCliente) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", dadosCliente);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuário (nome, email, sexo, senha) VALUES 
        ('${dadosCliente.nome}', '${dadosCliente.email}', '${dadosCliente.sexo}', '${dadosCliente.senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    var idUsuario = 0;

function enviarResultado (resultadoUsuario, emailUsuario, senhaUsuario) {
     console.log("Acessei o Questionário Model na função enviarResultado");
     enviarResultado2(emailUsuario, senhaUsuario);
     console.log(idUsuario);
     var instrucao = `
    INSERT INTO Questionário (resultado, fkUsuario) VALUES ("${resultadoUsuario}", ${idUsuario});`
    
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);

}

function enviarResultado2(emailUsuario, senhaUsuario) {
    console.log("Acessei o Questionário Model na função enviarResultado");

    var instrucao = `SELECT idUsuario FROM Usuário WHERE email = "${emailUsuario}" AND senha = "${senhaUsuario}"`;

    console.log("Executando a instrução SQL: \n" + instrucao);

    var resultado = database.executar(instrucao);
    var idUsuario = resultado[0]; //.idUsuario
    console.log(idUsuario);

    return idUsuario;
}

module.exports = {
    enviarResultado
};