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

function enviarResultado (resultadoUsuario) {
     console.log("Acessei o Questionário Model na função enviarResultado");

     var instrucao = `INSERT INTO Questionário (resultado, fkUsuario) VALUES
        ("${resultadoUsuario}")`;

}

module.exports = {
    entrar,
    cadastrar,
    listar,
};