/*Factory (Фабрика) — это порождающий паттерн проектирования, который скрывает логику создания объектов, 
позволяя создавать объекты без указания конкретного класса. Вместо new мы вызываем специальный метод — factory()

Мы хотим создавать разных пользователей, у каждого — свои свойства и поведение. 
Вместо ручного вызова new Admin() / new Guest(), мы используем фабрику. */
// Пример 1:
class Admin {
  constructor(name) {
    this.name = name;
    this.role = 'admin';
  }
  access() {
    return `Full access`;
  }
}
class Guest {
  constructor(name) {
    this.name = name;
    this.role = 'guest';
  }
  access() {
    return `read-only access`;
  }
}
class Member {
  constructor(name) {
    this.name = name;
    this.role = 'member';
  }
  access() {
    return `limited access`;
  }
}
class UserFactory {
  static createUser(type, name) {
    switch (type) {
      case 'admin':
        return new Admin(name);
      case 'member':
        return new Member(name);
      case 'guest':
        return new Guest(name);
      default:
        throw new Error(`Unknown User type ${type}`);
    }
  }
}
const firstUser = UserFactory.createUser('admin', 'Vladislav');
const secondUser = UserFactory.createUser('guest', 'Maria');
const thirdUser = UserFactory.createUser('member', 'Darya');
console.log(firstUser.name, firstUser.role, firstUser.access());
console.log(secondUser.name, secondUser.role, secondUser.access());
console.log(thirdUser.name, thirdUser.role, thirdUser.access());
// Пример 2:
class Button {
  render() {
    throw new Error("Method 'render()' must be implemented.");
  }
}
class PrimaryButton extends Button {
  render() {
    return `<button style="background: blue; color: white">Primary</button>`;
  }
}

class SecondaryButton extends Button {
  render() {
    return `<button style="background: gray; color: white">Secondary</button>`;
  }
}

class DangerButton extends Button {
  render() {
    return `<button style="background: red; color: white">Danger</button>`;
  }
}
class ButtonFactory {
  static registry = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    danger: DangerButton,
  };

  static createButton(type) {
    const ButtonClass = this.registry[type.toLowerCase()];
    if (!ButtonClass) {
      throw new Error(`Unknown button type: ${type}`);
    }
    return new ButtonClass();
  }
}
const buttons = ['primary', 'secondary', 'danger'];

buttons.forEach((type) => {
  const btn = ButtonFactory.createButton(type);
  console.log(btn.render());
});
// Пример 3
class SimpleMemberShip {
  constructor(name) {
    this.name = name;
    this.price = 50;
  }
}
class StandardMemberShip {
  constructor(name) {
    this.name = name;
    this.price = 150;
  }
}
class PremiumMemberShip {
  constructor(name) {
    this.name = name;
    this.price = 500;
  }
}
class MemberFactory {
  static list = {
    simple: SimpleMemberShip,
    standard: StandardMemberShip,
    premium: PremiumMemberShip,
  };
  create(name, type = 'simple') {
    const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new MemberShip(name);
    member.type = type;
    member.sayHi = function () {
      console.log(`Hi ${this.name}, your type is: ${this.type}`);
    };
    return member;
  }
}
const factory = new MemberFactory();
const members = [
  factory.create('Vladislav', 'premium'),
  factory.create('Ilya', 'premium'),
  factory.create('Vladimir', 'standard'),
];
members.forEach((m) => m.sayHi());
