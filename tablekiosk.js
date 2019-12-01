/**
 * Table Kiosk class represents the menu interface
 * the customer will interact with at each table
 */
class TableKiosk {
    constructor(kioskNum, assignment, menu) {
      this.kioskNum = kioskNum; //int
      this.assignment = assignmetnt; //Table class
      this.menu = menu; //Menu class
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