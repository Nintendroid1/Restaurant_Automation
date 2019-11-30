/**
 * Menu class that lists the menu items, the specials for the day
 * and is able to communicate with the inventory to see if items are
 * available
 */
class Menu {
    constructor(menuItems, specials, inventory) {
      this.menuItems = menuItems; //List[Dish]
      this.specials = specials; //List[Dish]
      this.inventory = inventory; //IventorySystem

    }
    get getMenuItems() {
        return this.menuItems;
    }
    set setMenuItems(x) {//Adds to the menu, not a whole list
        this.menuItems.push(x);
    }

    get getSpecials() {
        return this.specials;
    }
    set setSpecials(x) {//Adds to the menu, not a whole list
        this.setSpecials.push(x);
    }

    get checkInventory() {
        //TODO
    }
  }