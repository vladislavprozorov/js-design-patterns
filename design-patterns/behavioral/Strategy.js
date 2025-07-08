// Strategy (Стратегия)
// Выбор алгоритма во время выполнения.
class Shipping {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  calculate(price) {
    return this.strategy.calculate(price);
  }
}

class FedEx {
  calculate(price) {
    return price * 1.2;
  }
}
class DHL {
  calculate(price) {
    return price * 1.1;
  }
}

// Использование
const shipping = new Shipping();
shipping.setStrategy(new FedEx());
console.log('FedEx:', shipping.calculate(100));

shipping.setStrategy(new DHL());
console.log('DHL:', shipping.calculate(100));
