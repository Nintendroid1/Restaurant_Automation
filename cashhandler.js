/**
 * CardHandler class is responsible for processing payments 
 * done through card
 */
class CardHandler {
    constructor(payment) {
      this.payment = this.payment; //Payment class
    }

    //Returns change if applicable
    calculateChange(cashvalue) {
        return this.payment.getPayment - cashvalue;
    }

    get getPayment() {
        return this.payment;
    }

    sendPaymentToAccounting() {
        //TODO
    }
}