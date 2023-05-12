CREATE DATABASE politicando;

USE politicando;

CREATE TABLE Usuário (
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(100),
telefone CHAR(15),
sexo CHAR(1),
email VARCHAR(100),
senha VARCHAR(45),
confirmacaosenha VARCHAR(45)
);

CREATE TABLE Questionário (
idQuestionario INT PRIMARY KEY,
resultado VARCHAR(50),
fkUsuario INT 
);

CREATE TABLE Newsletter (
idNewsletter INT PRIMARY KEY,
nome_deputado_usario VARCHAR(45),
fkUsuario INT
);