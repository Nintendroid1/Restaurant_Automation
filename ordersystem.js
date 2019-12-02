/**
 * OrderSystem class places order for the customer, displays the menu,
 * and keeps track of global orders
 */
class OrderSystem {
    constructor(menu) {
        this.menu = menu // Menu class
        this.globalOrderNum = 0; // int
    }
    get getMenu() {
        return this.menu;
    }

    set setMenu(x) {
        this.menu = x;
    } 

    placeOrder(dishList, payment) {
        return new Order(this.globalOrderNum++, dishList, payment, 0);
    }

    trackOrder(orderIndex) {
        //Global data structure that keeps 
        //track of all orders
       return OrderList[orderIndex].getStatus();
    }
}

/**
 * Table Kiosk sub class represents the menu interface
 * the customer will interact with at each table
 */
class TableKiosk {
    constructor(kioskNum, assignment, menu) {
      OrderSystem.call(menu); //Parent Class
      this.kioskNum = kioskNum; //int
      this.assignment = assignment; //Table class
    }
    get getKioskNum() {
        return this.kioskNum;
    }
    set setKioskNum(x) {
        this.kioskNum = x;
    }

    get getAssignment() {
        return this.assignment;
    }
    set setAssignment(x) {
        this.assignment = x;
    }

    checkOrderStatus() {
        //TODO
    }
}

/**
 * MobileOnline sub class is the online version of the ordering
 * system.
 */
class MobileOnline {
    constructor(onlineID, pickUpTime, menu) {
        OrderSystem.call(menu); //Parent class
        this.onlineID = onlineID; // int
        this.pickUpTime = pickUpTime; //String
    }

    get getOnlineID() {
        return this.onlineID;
    }
    
    set setOnlineID(x) {
        this.onlineID = x;
    }

    get getPickUpTime() {
        return this.pickUpTime;
    }
    
    set setPickUpTime(x) {
        this.pickUpTime = x;
    }
}