/**
 * CardHandler class is responsible for processing payments 
 * done through card
 */
class CardHandler {
    constructor(payment, cardNumber, securityCode, accountingSystem) {
      this.payment = this.payment; //Payment class
      this.cardNumber = this.cardNumber; //String
      this.securityCode = securityCode; //String
      this.accountingSystem = accountingSystem;
    }

    //Returns true if payment was successful
    sendPaymentToBank() {
        //Bank api that will developed
        //when we get a standardized list
        //of support
        var bank = determineBank(this.cardNumber);
        var err = bank.sendPayment(this.payment, this.cardNumber, this.securityCode);
        
        if(err == 1) { //Error while processing
            return false;
        }
        return true;
    }

    get getPayment() {
        return this.payment;
    }

    sendPaymentToAccounting() {
        this.accountingSystem.addPayment(this);
    }
}