/**
 * Customer class represents the customer themselves
 * and the table and order they are assigned
 */
class Customer {
    constructor(name, tableNum, orderNum) {
      this.name = name; //string
      this.tableNum = tableNum; //int
      this.orderNum = orderNum; //int
    }
    get getCustomerName() {
        return this.name;
    }
    set setCustomerName(x) {
        this.name = x;
    }

    set assignTableNum(x) {
        return this.tableNum = x;
    }
    set assignOrderNum(x) {
        this.orderNum = x;
    }
}