-- Comandos para a tabela no postgreSQL

-- Rota de cração do database CREATE DATABASE IF NOT EXIST VidaFit;

-- Extensão para uuid CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de usuarios CREATE TABLE users( username VARCHAR(555), first_name VARCHAR(555), age_user DATE, last_name VARCHAR(555), email_user VARCHAR(555), password_user VARCHAR(555), gender_user VARCHAR(255), problems_user VARCHAR(255), id_user UUID DEFAULT uuid_generate_v4() PRIMARY KEY,)