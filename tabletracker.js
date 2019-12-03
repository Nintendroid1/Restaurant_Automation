/**
 * Table Tracker class is repsonsible for keeping track of the 
 * tables customers dine from
 */
class TableTracker {
    constructor(tables) {
      this.tables = tables; //List[Table]
    }

    //Returns null if out of range
    queryTable(index) {
        if(index < 0 || index > this.tables.length) {
            return null;
        }
        return this.tables[index];
    }

    showTableAvailability() {
        var availTables = [];
        for(let i = 0; i<this.tables.length; i++) {
            var currTable = this.tables[i];

            //Check to see if table is dirty
            if(!currTable.isOccupied) {
                dirtyTables.push(currTable);
            }
        }
        return availTables;
    }

    showTableEstimateAvailbility() {
        let leastTime = 0;
        for (Table t in tables) {
            if (t.time < )
        }

    }
}