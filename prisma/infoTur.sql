-- Cria o banco de dados infotur
CREATE DATABASE infotur;

CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(160) NOT NULL,
    `telefone` CHAR(11) NOT NULL,
    `senha` CHAR(60) NOT NULL,
    `cpf` CHAR(11) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `customer_id` VARCHAR(191) NULL,


    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE UNIQUE INDEX `Usuario_customer_id_key` ON `Usuario`(`customer_id`);