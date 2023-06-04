CREATE DATABASE politicando;

USE politicando;

CREATE TABLE Usuário (
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(100),
sexo CHAR(1),
email VARCHAR(100),
senha VARCHAR(45)
);

CREATE TABLE Questionário (
idQuestionario INT PRIMARY KEY auto_increment,
resultado VARCHAR(50),
fkUsuario INT 
);

CREATE TABLE VotaçãoGosta (
idVotação INT PRIMARY KEY auto_increment,
deputadogosta VARCHAR(100),
fkUsuario INT
);

CREATE TABLE VotaçãoNGosta (
idVotação INT PRIMARY KEY auto_increment,
deputadongosta VARCHAR(100),
fkUsuario INT
);

SELECT * FROM Usuário;

SELECT * FROM Questionário;	

SELECT * FROM votaçãoGosta;

SELECT * FROM votaçãoNGosta;