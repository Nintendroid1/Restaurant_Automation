/**
 * Employee class represent's the employee themselves
 */
class Employee {
    constructor(employeeID, contactInfo) {
      this.employeeID = employeeID; //int
      this.contactInfo = contactInfo; //Contact class
    }
    get getEmployeeID() {
        return this.employeeID;
    }
    set setEmployeeID(x) {
        this.employeeID = x;
    }

    get getContactInfo() {
        return this.contactInfo;
    }
    set setContactInfo(x) {
        this.contactInfo = x;
    }
}

/**
 * Chef subclass represents an employee that is assigned a kitchen station
 */
class Chef {
    constructor(employeeID, contactInfo, stationAssignment) {
        Employee.call(employeeID, contactInfo);
        this.stationAssignment = stationAssignment;
    }

    get getStationAssignment() {
        return this.stationAssignment;
    }
    set setStationAssignment(x) {
        this.stationAssignment = x;
    }
}

/**
 * Waiter subclass represents an employee that is assigned a table
 */
class Waiter {
    constructor(employeeID, contactInfo, tableAssignment, orderNum) {
        Employee.call(employeeID, contactInfo);
        this.tableAssignment = tableAssignment;
        this.orderNum = orderNum;
    }

    get getTableAssignment() {
        return this.tableAssignment;
    }
    set setTableAssignment(x) {
        this.tableAssignment = x;
    }

    get getOrderNum() {
        return this.orderNum;
    }
}