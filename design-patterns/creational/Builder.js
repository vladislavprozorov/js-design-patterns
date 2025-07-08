/* Builder — это паттерн, который позволяет создавать сложные объекты пошагово, 
используя один и тот же процесс создания, но с разной конфигурацией.*/
class User {
  constructor(name, age, email, role) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.role = role;
  }
}

class UserBuilder {
  constructor(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setRole(role) {
    this.role = role;
    return this;
  }

  build() {
    return new User(this.name, this.age, this.email, this.role);
  }
}

// Использование
const user = new UserBuilder('Alice')
  .setAge(30)
  .setEmail('alice@example.com')
  .setRole('admin')
  .build();

console.log(user);
// Это избавляет от длинного конструктора вроде:
const user2 = new User('Alice', 30, 'alice@example.com', 'admin');
console.log(user2);
/* 
Builder = пошаговая сборка сложного объекта

Особенно полезен при множестве параметров, вложенных структур

Часто используется в UI-компонентах, генераторах конфигураций, HTML/JSX, SQL-запросах
*/
