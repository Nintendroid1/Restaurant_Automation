/**
 * Table Tracker class is repsonsible for keeping track of the 
 * tables customers dine from
 */
class TableTracker {
    constructor(tables, orderSystem) {
      this.tables = tables; //List[Table]
      this.orderSystem = orderSystem;
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
        for (let table in tables) {
            if (!table.occupied) {
                table.setTime(0) ;
            }
        }
        for (let order in this.orderSystem.getOrderList()) {
            let table = tables[order.getTableNum()];
            switch (order.getStatus()) {
                case RECEIVED:
                    table.setTime(table.getTime() + 60); //minutes
                    break;
                case IN_PROGRESS:
                    table.setTime(table.getTime() + 50);
                    break;
                case COMPLETE:
                    table.setTime(table.getTime() + 40);
                    break;
            }
        }
        return this.tables.map(x => x.time);
    }
}