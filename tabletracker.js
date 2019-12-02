/**
 * Table Tracker class is repsonsible for keeping track of the 
 * tables customers dine from
 */
class TableTracker {
    constructor(tables) {
      this.tables = tables; //List[Table]
    }

    //Returns null if out of range
    showTableAvailability(index) {
        if(index < 0 || index > this.kitchenTables.length) {
            return null;
        }
        return this.tables[index];
    }

    showTableEstimateAvailbility() {
        //TODO
    }
}