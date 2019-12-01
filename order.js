/**
 * Order class represents the customer's order
 */
class Order {
    constructor(orderNum, dishList, payment, status) {
      this.orderNum = orderNum; //int
      this.dishList = dishList; //List[Dish]
      this.payment = payment; //Payment class
      this.status = status; //int
    }
    get getOrderNum() {
        return this.orderNum;
    }
    set setOrderNumber(x) {
        this.orderNum = x;
    }

    get getDishList() {
        return this.dishList;
    }
    set setDishList(x) {
        this.dishList = x;
    }

    get getPayment() {
        return this.payment;
    }
    set setPayment(x) {
        this.payment = x;
    }

    get getStatus() {
        return this.status;
    }
    set setStatus(x) {
        this.status = x;
    }
  }