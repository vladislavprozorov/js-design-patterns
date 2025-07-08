/*структурные паттерны проектирования в JavaScript — это паттерны, 
которые определяют структуру объектов и классов, упрощая масштабируемость, повторное использование и читаемость. */
// Старый API
class OldPrinter {
  printOld(msg) {
    console.log(`Old printer: ${msg}`);
  }
}

// Адаптер
class PrinterAdapter {
  constructor() {
    this.oldPrinter = new OldPrinter();
  }

  print(message) {
    this.oldPrinter.printOld(message); // преобразование интерфейса
  }
}

// Клиент
const printer = new PrinterAdapter();
printer.print('Hello world!');
