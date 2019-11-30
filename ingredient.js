/**
 * Ingredient class that lists the name the quantity.
 * Used for preparation and for inventory
 */
class Ingredient {
    constructor(ingredientName, quantity) {
      this.ingredientName = ingredientName; //string
      this.quantity = quantity; //int
    }
    get getIngredientName() {
        return this.ingredientName;
    }
    set setIngredientName(x) {
        this.ingredientName = x;
    }

    get getQuantity() {
        return this.quantity;
    }
    set setQuantity(x) {
        this.quantity = x;
    }

    get isAvailable() {
        return this.quantity != 0;
    }
  }