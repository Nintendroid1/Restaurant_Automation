/**
 * Table class represents the table in the restaurants
 * and indicates if the table is currently occupied
 */
class Table {
    constructor(tableNum, location, seatingNum, occupied, assignment, kiosk) {
      this.tableNum = tableNum; //int
      this.location = location; //string
      this.seatingNum = seatingNum; //int
      this.occupied = occupied; //boolean
      this.assignment = assignment; //Waiter class
      this.kiosk = kiosk; //TableKiosk class
      this.time = 0;
    }
    get getTableNum() {
        return this.tableNum;
    }
    set setTableNum(x) {
        this.tableNum = x;
    }

    get getLocation() {
        return this.location;
    }
    set setLocation(x) {
        this.location = x;
    }

    get getSeatingNum() {
        return this.seatingNum;
    }
    set setSeatingNum(x) {
        this.seatingNum = x;
    }

    get isOccupied() {
        return occupied;
    }
    markOccupied() {
        this.occupied = true;
    }

    get getAssignment() {
        return this.assignment;
    }

    set setAssignment(x) {
        this.assignment = x;
    }

    get getKiosk() {
        return this.kiosk;
    }

    set setKiosk(x) {
        this.kiosk = x;
    }

    get getTime() {
        return this.time;
    }

    set setTime(x) {
        this.time = x;
    }
}
