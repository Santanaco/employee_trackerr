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