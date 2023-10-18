-- Cria o banco de dados infotur
CREATE DATABASE infotur;


USE infotur;

CREATE TABLE cadastro (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  telefone VARCHAR(15),
  data_nascimento DATE,
  PRIMARY KEY (id)
);




UPDATE cadastro
SET data_nascimento = '1992-05-15'
WHERE id = 1;


INSERT INTO cadastro (nome, email, senha, cpf, telefone, data_nascimento)
VALUES
  ('vitor', 'vitor@example.com', 'senha2141', '53293493234', '11971987676', '2022-11-22'),
  ('Rafael', 'rafa2@example.com', 'senha2141', '53293421334', '11971987622', '2012-12-22');

 


SELECT * FROM cadastro;


CREATE TABLE login_usuarios (
  id INT(11) NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO login_usuarios (email, senha)
VALUES ('pietro.silva@gmail.com', 'slql23123'),('vitor@gmail.com', 'sdasdasdasFSADA23123');

select * from cadastro;
SELECT * FROM login_usuarios;
