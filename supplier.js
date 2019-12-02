/**
 * Supplier class represent's the supplier
 * that provides the inventory item
 */
class Supplier {
    constructor(supplierID, contactInfo) {
      this.supplierID = supplierID; //int
      this.contactInfo = contactInfo; //Contact class
    }
    get getSupplierID() {
        return this.supplierID;
    }
    set setSupplierID(x) {
        this.supplierID = x;
    }

    get getContactInfo() {
        return this.contactInfo;
    }
    set setContactInfo(x) {
        this.contactInfo = x;
    }
}