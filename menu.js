/**
 * Menu class that lists the menu items, the specials for the day
 * and is able to communicate with the inventory to see if items are
 * available
 */
class Menu {
    constructor(menuItems, specials, inventory) {
      this.menuItems = menuItems; //List[Dish]
      this.specials = specials; //List[Dish]
      this.inventory = inventory; //IventorySystem class

    }
    get getMenuItems() {
        return this.menuItems;
    }
    set setMenuItems(x) {
        this.menuItems = x;
    }

    get getSpecials() {
        return this.specials;
    }
    set setSpecials(x) {
        this.setSpecials = x;
    }

    checkInventory() {
        let temp = [];
        for (let dish in this.menuItems) {
            if (dish.checkIngredients()) {
                temp.append(dish);
            }
        }
        this.menuItems = temp;
        temp = [];
        for (let dish in this.specials) {
            if (dish.checkIngredients()) {
                temp.append(dish);
            }
        }
        this.specials = temp;
    }
  }