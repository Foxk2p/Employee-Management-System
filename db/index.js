const dbConnect = require("./dbConnect")

class Db {

  constructor(dbConnect) {
    this.dbConnect = dbConnect;
  }


  allEmployees() {
    return this.dbConnect.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }


  allRoles() {
    return this.dbConnect.query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }


  allDepartments() {
    return this.dbConnect.query(
      "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
    );
  }


  createRole(role) {
    return this.dbConnect.query("INSERT INTO role SET ?", role);
  }
}

module.exports = new Db(dbConnect);
