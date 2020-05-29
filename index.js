const { prompt } = require("inquirer");
const db = require("./db");


loadMainPrompts();

async function loadMainPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "View_Employees"
        },
        {
          name: "View All Roles",
          value: "View_Roles"
        },
        {
          name: "View All Departments",
          value: "View_Departments"
        },
        {
          name: "Quit",
          value: "Quit"
        }
      ]
    }
  ]);

  switch (choice) {
    case "View_Employees":
      return viewEmployees();
    case "View_Roles":
      return viewRoles();
    case "View_Departments":
      return viewDepartments();
    default:
      return quit();
  }
}

async function viewEmployees() {
  const employees = await db.allEmployees();


  console.table(employees);

  loadMainPrompts();
}

async function viewRoles() {
  const roles = await db.allRoles();


  console.table(roles);

  loadMainPrompts();
}

async function viewDepartments() {
  const departments = await db.allDepartments();

  console.table(departments);

  loadMainPrompts();
}


function quit() {
  console.log("And Scene!");
  process.exit();
}

