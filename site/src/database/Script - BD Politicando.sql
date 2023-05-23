CREATE DATABASE politicando;

USE politicando;

CREATE TABLE Usuário (
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(100),
sexo CHAR(1),
email VARCHAR(100),
senha VARCHAR(45)
);

INSERT INTO Usuário VALUES 
	(1, 'Gabriel', 'M', 'namur_gabriel@yahoo.com', '123', '123');

CREATE TABLE Questionário (
idQuestionario INT PRIMARY KEY auto_increment,
resultado VARCHAR(50),
fkUsuario INT 
);

INSERT INTO Questionário VALUES	
	(1, 'Esquerda', 1),
    (2, 'Centro-esquerda', 2),
    (3, 'Centro', 3),
    (4, 'Direita', 4),
    (5, 'Extrema-direita', 5);

CREATE TABLE Votação (
idVotação INT PRIMARY KEY,
deputado_escolhido 	VARCHAR(100),
voto_usuario CHAR(1),
fkUsuario INT
);

INSERT INTO Votação VALUES 
	(1, 'Tabata Amaral', 'S', 1),
    (2, 'Kim Kataguiri', 'N', 2);