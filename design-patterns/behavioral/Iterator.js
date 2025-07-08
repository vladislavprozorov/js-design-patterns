// Iterator (Итератор)
// Последовательный доступ к элементам коллекции без раскрытия внутренней структуры.
class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }
  next() {
    return this.index < this.items.length
      ? { value: this.items[this.index++], done: false }
      : { done: true };
  }
}

// Использование
const iterator = new Iterator(['🟩', '🟦', '🟥']);
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
