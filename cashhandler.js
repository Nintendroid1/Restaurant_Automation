/**
 * CardHandler class is responsible for processing payments 
 * done through card
 */
class CardHandler {
    constructor(payment, accountingSystem) {
      this.payment = this.payment; //Payment class
      this.accountingSystem = accountingSystem; //AccountingSystem class
    }

    //Returns change if applicable
    calculateChange(cashvalue) {
        return this.payment.getPayment - cashvalue;
    }

    get getPayment() {
        return this.payment;
    }

    sendPaymentToAccounting() {
        this.accountingSystem.addPayment(this);
    }
}