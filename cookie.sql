create database cookie;
use cookie;

create table users(
	userId varchar(37) primary key,
    fname varchar(15) not null,
    lname varchar(15) not null,
    email varchar(31) not null,
    pass  varchar(100)not null
);