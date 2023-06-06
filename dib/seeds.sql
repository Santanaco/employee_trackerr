INSERT INTO department (id, dep_name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 110000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Engineering Manager", 180000, 2),
       (4, "Software Engineer", 150000, 2),
       (5, "Account Manager", 120000, 3),
       (6, "Legal Team Lead", 170000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Sarah", "Singer", 3, NULL),
       (2, "Maria", "Gomez", 4, 1),
       (3, "Elise", "Hughes", 1, NULL),
       (4, "Coco", "Santana", 2, 3),
       (5, "Billy", "Bob", 5, NULL );
