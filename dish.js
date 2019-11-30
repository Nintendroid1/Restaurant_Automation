class Menu {
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
    set setIngredientList(x) {//Adds to the ingredient list, not a whole list
        this.ingredientList.push(x);
    }
    
    get getPrepInfo() {
        return this.prepInfo;
    }
    set setPrepInfo(x) {
        this.prepInfo = x;
    }
}