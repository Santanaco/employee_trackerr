-- view all departments --
SELECT id, dep_name AS 'name' FROM department

-- view all roles --
SELECT roles.id, roles.title, department.dep_name AS department, salary
FROM roles
INNER JOIN department ON roles.department_id = department.id
ORDER BY roles.id ASC

-- view all roles with id and title --
SELECT id, title FROM roles

-- view all employees --
SELECT 
  employees.id, 
  employees.first_name, 
  employees.last_name, 
  roles.title, 
  department.dep_name AS 'department', 
  roles.salary,
  CONCAT(manager.first_name, ' ', manager.last_name) AS 'manager'
FROM 
  employees
  JOIN roles ON employees.role_id = roles.id
  JOIN department ON roles.department_id = department.id
  LEFT JOIN employees AS manager ON employees.manager_id = manager.id
ORDER BY 
  employees.id ASC;

-- view id, first_name and last_name from employees
SELECT id, first_name, last_name FROM employees ORDER BY id ASC;

-- add department --
INSERT INTO roles (title, salary, department_id) 
VALUES ('Assistant', 60000, 4);

-- add department --
INSERT INTO department (dep_name) 
VALUES ('Human Resources')

-- add employee --
INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES ('Tommy', 'Frank', 2, 'Harry')

-- slect all employees
SELECT employees.first_name, employees.last_name FROM employees

-- select title from roles table --
SELECT title FROM roles

-- update role of empployee --
UPDATE employees
SET role_id = 3
WHERE id = 17