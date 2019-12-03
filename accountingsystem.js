class AccountingSystem {
    constructor(paymentList) {
        this.paymentList = paymentList;
    }

    getDailySales() {
        let sales = [];
        for (let payment in this.paymentList) {
            if (payment.getPrice() > 0.00) {
                sales.append(payment);
            }  
        }
        return sales;
    }

    get getPaymentList() {
        return this.paymentList;
    }

    addPayment(payment) {
        this.paymentList.append(payment);
    }

}