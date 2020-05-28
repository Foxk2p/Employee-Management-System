-- Database
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

-- Tables

USE employees_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL  NOT NULL,
  department_id INT  NOT NULL,
  INDEX depInd (department_id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT  NOT NULL,
  INDEX roleInd (role_id),
  CONSTRAINT fKeyRole FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT,
  INDEX man_ind (manager_id),
 FOREIGN KEY (manager_id) REFERENCES employee(id)
);
