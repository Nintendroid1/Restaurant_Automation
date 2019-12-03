class StatisticsHandler {
    constructor(employeeDB, accountingSystem, orderSystem, inventorySystem) {
        this.employeeDB = employeeDB;
        this.accountingSystem = accountingSystem;
        this.orderSystem = orderSystem;
        this.inventorySystem = inventorySystem;
    }

    analyzeData() {
        var result = new List[String]();
        list.append(employeeDB.toString());
        list.append(accountingSystem.toString());
        list.append(orderSystem.toString());
        return result;
    }

    calculateDailyRevenue() {
        let revenue = 0; // float
        for (let payment in this.accountingSystem.getPaymentList()) {
            revenue += payment.getPrice
        }
        return revenue;
    }

}