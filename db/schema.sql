DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

CREATE TABLE department (
    id Int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE role(
    -- needs id, 
);

CREATE TABLE employee(
    -- needs id, first name, last name, role_id(fk), 
);