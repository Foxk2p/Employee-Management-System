USE employees_db;

INSERT INTO department (name)
VALUES
('Produce'),
('Frozen Foods'),
('Wine and Beer'),
('Deli');

INSERT INTO role (title, salary, department_id)
VALUES
('Produce Lead', 38500, 1),
('Produce Hand', 27000, 1),
('Frozen Foods Lead', 38000, 2),
('Frozen Foods Hand', 26000, 2),
('Frozen Foods Hand', 25000, 2),
('W and B Lead', 35000, 3),
('W and B Hand', 27000, 4),
('Deli Lead', 25000, 4),
('Deli Hand', 22000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),
('Jack', 'Doe', 2, 1),
('Tina', 'Orta', 3, NULL),
('Bob', 'Rojek', 4, 3),
('Kevin', 'Palos', 5, 3),
('Kerry', 'Ota', 6, NULL),
('Alisha', 'Smith', 7, 5),
('Mark', 'Hamilton', 8, NULL),
('Jerry', 'Bridge', 9, 7);