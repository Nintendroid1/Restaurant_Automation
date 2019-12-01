/**
 * Employee class represent's the employee themselves
 */
class KitchenTable {
    constructor(stationNum, location, dirty, assignment) {
      this.stationNum = stationNum; //int
      this.location = location; //String
      this.dirty = dirty; //boolean
      this.assignment = assignment; //Chef class
    }
    get getStationNum() {
        return this.stationNum;
    }
    set setStationNum(x) {
        this.stationNum = x;
    }

    get getLocation() {
        return this.location;
    }
    set setLocation(x) {
        this.location = x;
    }

    get isDirty() {
        return this.dirty;
    }

    get getAssignment() {
        return this.assignment;
    }
    set setAssignment(x) {
        this.assignment = x;
    }
}