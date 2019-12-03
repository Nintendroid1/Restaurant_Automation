/**
 * InventoryItem class that lists the name, the quantity as an int,
 * the storage requirements, the corresponding supplier,
 * indicates if it's stocked, and experiation date
 */
class InventoryItem {
    constructor(name, quantity, storageRequirements, supplier, stocked, expirationDate) {
      this.name = name; //string
      this.quantity = quantity; //int
      this.storageRequirements = storageRequirements; //string
      this.supplier = supplier; //Supplier class
      this.stocked = stocked; //boolean
      this.expirationDate = expirationDate; //string

      //Calculates the inventoryID by
      //hashing the unique name
      this.inventoryID = hash(name); //int

    }
    get getName() {
        return this.name;
    }
    set setName(x) {
        this.name = x
    }

    get getQuantity() {
        return this.quantity;
    }
    set setQuantity(x) {
        this.quantity = x
    }

    get getStorageRequirements() {
        return this.storageRequirements;
    }
    set setStorageRequirements(x) {
        this.storageRequirements = x
    }

    get getSupplier() {
        return this.supplier;
    }
    set setSupplier(x) {
        this.supplier = x
    }

    get isStocked() {
        return this.quantity != 0;
    }

    get getExpirationDate() {
        return this.expirationDate;
    }
    set setExpirationDate(x) {
        this.expirationDate = x
    }

    restockItem() {
        if (!this.stocked || this.quantity < 30) {
            this.supplier.notifySupplier();
        }
    }
}