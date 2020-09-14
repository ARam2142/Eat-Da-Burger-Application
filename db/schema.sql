DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL IDENTITY,
    burger_name TEXT(30) NOT NULL,
    devoured TINYINT(1) NOT NULL,
    PRIMARY KEY(id)
);