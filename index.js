const inquirer = require('inquirer');
const figlet = require('figlet');
const colors = require('colors/safe');
const cTable = require('console.table');
const db = require('./config/connections');
const { query } = require('./config/connections');
const initialPromptArray = require('./lib/initialPromptArray');

// Connect to MySQL and title
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(
    colors.cyan(
      `==========================================================================`
    )
  );
  console.log(``);
  console.log(colors.cyan(figlet.textSync('             Employee')));
  console.log(colors.cyan(figlet.textSync('                Manager')));
  console.log(``);
  console.log(``);
  console.log(
    colors.cyan(
      `==========================================================================`
    )
  );
  console.log(``);
  initialPrompt();
});

// initial prompt to show the user
const initialPrompt = async () => {
    await inquirer.prompt(initialPromptArray).then((answers) => {
      const answer = answers.initialPrompt;
      switch (answer) {
        case 'View All Departments':
          viewAllDepartments();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Employees':
          viewAllEmployees();
          break;
        case 'Add Department':
          addDepartment();
          break;
        case 'Add Role':
          addRole();
          break;
        case 'Add an Employee':
          addEmployee();
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'Exit':
          showThankYou();
          break;
      }
    });
  };
  
  const viewAllEmployees = async () => {
    const viewEmployeesQuery = `SELECT 
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
    employees.id ASC;`;
    const data = await new Promise((resolve, reject) => {
      db.query(viewEmployeesQuery, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    console.log('');
    console.log(colors.yellow('ALL EMPLOYEES'));
    console.log('');
    console.table(data);
    initialPrompt();
  };
  