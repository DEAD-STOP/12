USE employees_db;

INSERT INTO department
    (name)
VALUES
    ("HR"),
    ("Engineering"),
    ("R&D"),

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("HR_Rep", 60000, 1),
    ("Civil_Engineer", 80000, 2),
    ("Tester", 20000, 3),

INSERT INTO employee
    (first_name, surname, role_id, manager_id)
VALUES
    ("Charles", "Mahoney", 1, NULL),
    ("Tristan", "Christianson", 2, 1),
    ("Arin", "Hanson", 3, NULL)