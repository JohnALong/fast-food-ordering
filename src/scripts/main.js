console.log("this works");
const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        if (meal === chickenComboMeal) {
            this.orders.push(chickenComboMeal);
        } else if (meal === cheeseBurgerComboMeal) {
            this.orders.push(cheeseBurgerComboMeal);
        } else if (meal === hotDogComboMeal) {
            this.orders.push(hotDogComboMeal);
        } else {
            console.log("you forgot to place your order");
        }
    }
}
// creating orders array in object restaurant
restaurant.orders = [];
// chicken combo meal object
const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "large"
}
// cheese burger combo meal
const cheeseBurgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "large"
}
// hot dog combo meal
const hotDogComboMeal = {
    sandwichType: "hot dog",
    fries: true,
    drinkSize: "large"
}

// console.log("chicken combo meal", chickenComboMeal);
// console.log("restaurant object", restaurant)
// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(hotDogComboMeal);
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(cheeseBurgerComboMeal);
console.log("list of orders", restaurant.orders);

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table(restaurant.orders);
