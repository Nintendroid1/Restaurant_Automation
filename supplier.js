/**
 * Supplier class represent's the supplier
 * that provides the inventory item
 */
class Supplier {
    constructor(supplierID, contactInfo, accountingSystem) {
      this.supplierID = supplierID; //int
      this.contactInfo = contactInfo; //Contact class
      this.accountingSystem = accountingSystem
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

    notifySupplier() {
        fetch(this.contactInfo)
            .then((response) => {
                assert(response.status == 200);
                let cost = new Payment(4, -(response.price), response.bank, response.time);
                this.accountingSystem.addPayment(cost);
            })
            .catch((response) => {
                console.error(response.status);
            });
    }
}