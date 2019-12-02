/**
 * InventorySystem class represents the restaurant's stock
 */
class InventorySystem {
    constructor(inventoryList) {
      this.inventoryList = inventoryList; //List[InventoryItem]

      //Frozen items and fresh items
      //are stored in another list when they're added 
      //to the system
      this.frozenItems = []; //List[InventoryItem]
      this.freshItems = []; //List[InventoryItem]
    }

    //Returns null if out of range
    queryItem(name) {
        //Hashes the name to get the index of the item
        var index = hash(name);

        if(index < 0 || index > this.inventoryList.length) {
            return null;
        }
        return this.inventoryList[index];
    }

    checkFrozen() {
        return this.frozenItems;
    }
    
    checkFresh() {
        return this.freshItems;
    }

    checkExpiration() {
        var expiredItems = [];
        for(i = 0; i<this.inventoryList.length; i++) {
            var currItem = this.inventoryList[i];

            //Check to see if expriation date is greater
            //than today's date
            if(currItem.getExpirationDate > currDate) {
                expiredItems.push(this.inventoryList[i]);
            }
        }
        return expiredItems;
    }
}