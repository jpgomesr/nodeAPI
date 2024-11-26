create database dbdesafioiago;

use dbDesafioIago;

create table tb_usuarios (
	id int not null auto_increment primary key,
    nome varchar(150) not null,
    data_criacao date not null
);

create table tb_imagens (
	id int not null auto_increment primary key,
    referencia varchar(150) not null,
    data_criacao date not null,
    titulo varchar(150) not null
);

select * from tb_usuarios;
select * from tb_imagens;