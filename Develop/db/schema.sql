-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce;

-- CREATE DATABASE
CREATE DATABASE ecommerce;


CREATE TABLE Category(
    ID int primary key not null auto_increment,
    Name varchar(255)

);
CREATE TABLE Tag (
   ID int primary key not null auto_increment,
    Name varchar(255)

);
CREATE TABLE Product (
    ID int primary key not null auto_increment,
    Name varchar(255),
    price decimal(4,2),
    categoryid int not null,
    foreign key (categoryid) references category (ID)
);
CREATE TABLE Tagonproduct (
   IDproduct int,
   IDtag int,
    foreign key (IDproduct) references product (ID),
    foreign key (IDtag) references tag (ID)

);

