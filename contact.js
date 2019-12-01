/**
 * Contact class represent's the employee's contact
 * information from the name, phone number, and email
 */
class Contact {
    constructor(name, phoneNumber, email) {
      this.name = name; //string
      this.phoneNumber = phoneNumber; //string
      this.email = email; //string
    }
    get getName() {
        return this.name;
    }
    set setName(x) {
        this.name = x;
    }

    get getPhoneNumber() {
        return this.phoneNumber;
    }
    set setPhoneNumber(x) {
        this.phoneNumber = x;
    }

    get getEmail() {
        return this.email;
    }
    set setEmail(x) {
        this.email = x;
    }
}