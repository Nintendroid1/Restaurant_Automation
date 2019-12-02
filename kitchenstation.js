/**
 * KitchenStation class represents the entire workstation a chef is
 * responsible for
 */
class KitchenStation {
    constructor(kitchenTables) {
      this.kitchenTables = kitchenTables; //List[KitchenTable]
    }

    //Returns null if out of range
    queryTable(index) {
        if(index < 0 || index > this.kitchenTables.length) {
            return null;
        }
        return this.kitchenTables[index];
    }

    getDirty() {
        var dirtyTables = [];
        for(i = 0; i<this.kitchenTables.length; i++) {
            var currTable = this.kitchenTables[i];

            //Check to see if table is dirty
            if(currTable.isDirty) {
                dirtyTables.push(currTable);
            }
        }
        return dirtyTables;
    }

    //Returns true if successfully set dirty
    setDirty(index) {
        var dirtyTable = this.queryTable(index);
        if(dirtyTable == null)  {
            return false;
        }
        dirtyTable.setDirtyStatus(true);
        return true;
    }

    isAvailable(index) {
        var thisTable = this.queryTable(index);
        if(dirtyTable == null) {
            return false;
        }
        return !thisTable.isDirty()
    }
}