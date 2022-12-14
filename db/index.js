
const connection = require("./connection");
class Company {
  constructor(connection) {
    this.connection = connection;
  }
  viewDeptTable() {
    return this.connection.promise().query("SELECT * FROM DEPARTMENT");
  }
  viewRoleTable() {
    return this.connection.promise().query("SELECT * FROM ROLE");
  }
  viewEmployeeTable() {
    return this.connection.promise().query("SELECT * FROM EMPLOYEE");
  }
  insertDept(input) {
    return this.connection
      .promise()
      .query("INSERT INTO DEPARTMENT dept_name VALUES (?)", input);
  }
  insertRole(input) {
    return this.connection
      .promise()
      .query("INSERT INTO role (title) VALUES (?)", input);
  }
  insertEmployee(input) {
    return this.connection
      .promise()
      .query("INSERT INTO employee (first_name) VALUES (?)", input);
  }
}
module.exports = new Company(connection);