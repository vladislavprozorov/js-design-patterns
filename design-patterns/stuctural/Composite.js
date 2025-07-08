// Построение дерева объектов. Полезно при работе с иерархическими структурами (например, DOM, меню, UI-компоненты).
class Component {
  operation() {
    throw new Error('Method not implemented');
  }
}

class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  operation() {
    console.log(`Leaf: ${this.name}`);
  }
}

class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  operation() {
    for (const child of this.children) {
      child.operation();
    }
  }
}

// Строим дерево
const tree = new Composite();
tree.add(new Leaf('A'));
tree.add(new Leaf('B'));

const subtree = new Composite();
subtree.add(new Leaf('C'));
tree.add(subtree);

tree.operation();
