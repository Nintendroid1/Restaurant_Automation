/**
 * Payment class represents the customer's purchase
 */
class Payment {
    constructor(type, price, bank, time) {
      this.type = type; //PaymentType class
      this.price = price; //float
      this.bank = bank; //String
      this.time = time;

    }
    get getPaymentType() {
        return this.type;
    }
    set setPaymentType(x) {
        this.type = x;
    }

    get getPrice() {
        return this.price;
    }
    set setPrice(x) {
        this.setPrice = x;
    }
  }

/*
* Enum for payment type
*/  
var PaymentType = {
    CASH: 1 ,
    CREDIT: 2,
    DEBIT: 3,
    THIRDPARTY: 4
}