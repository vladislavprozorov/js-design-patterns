// Повторное использование объектов с одинаковыми данными (например, в играх).

class Tree {
  constructor(type) {
    this.type = type; // Общая информация
  }

  display(x, y) {
    console.log(`Tree of type ${this.type} at (${x}, ${y})`);
  }
}

class TreeFactory {
  constructor() {
    this.trees = {};
  }

  getTree(type) {
    if (!this.trees[type]) {
      this.trees[type] = new Tree(type);
    }
    return this.trees[type];
  }
}

// Использование
const factory = new TreeFactory();

const tree1 = factory.getTree('Oak');
tree1.display(10, 20);

const tree2 = factory.getTree('Oak'); // Повторно используем
tree2.display(15, 25);
