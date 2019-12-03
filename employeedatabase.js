class EmployeeDatabase {
    constructor(employeeList) {
        this.employeeList = employeeList;
        this.dbconnection = MongoDB.connect();
    }

    queryEmployee(empID) {
        let result = this.dbconnection.execute("employees.inventory.find({employeeID: " + empID + ")");
        return new Employee(empID, result.contactInfo);
    }

    toString() {
        let result = this.dbconnection.execute("employees.inventory.find({})");
        return JSON.stringify(result);
    }

}