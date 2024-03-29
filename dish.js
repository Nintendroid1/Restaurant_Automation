/**
 * Dish class that lists the name as a string, the price as a float,
 * the ingredients as a list, and the prepration info as a string
 */
class Dish {
    constructor(dishName, price, ingredientList, prepInfo) {
      this.dishName = dishName; //String
      this.price = price; //float
      this.ingredientList = ingredientList; //List[Ingredient]
      this.prepInfo = prepInfo; //String
    }
    get getDishName() {
        return this.dishName;
    }
    set setDishName(x) {
        this.dishName = x
    }

    get getPrice() {
        return this.price;
    }
    set setPrice(x) {
        this.price = x;
    }

    get getIngredientList() {
        return this.ingredientList;
    }
    set setIngredientList(x) {
        this.ingredientList = x;
    }
    
    get getPrepInfo() {
        return this.prepInfo;
    }
    set setPrepInfo(x) {
        this.prepInfo = x;
    }

    checkIngredients() {
        let result = false;
        for (let ingredient in this.ingredientList) {
            if (ingredient.isAvailable()) {
                result = true;
            }
            else {
                result = false;
            }
        }
        return result;
    }
}