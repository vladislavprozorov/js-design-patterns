//Расширение поведения объекта без изменения оригинального класса.
class Coffee {
  cost() {
    return 5;
  }
}

// Декоратор
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

const simpleCoffee = new Coffee();
const milkCoffee = new MilkDecorator(simpleCoffee);

console.log(milkCoffee.cost()); // 7
