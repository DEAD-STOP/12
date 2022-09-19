
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

}
module.exports = new Company(connection);