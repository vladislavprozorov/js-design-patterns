// Один объект (Subject) уведомляет подписчиков (Observers) об изменениях.
// Subject
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name} получил уведомление: ${data}`);
  }
}

// Использование
const news = new Subject();

const user1 = new Observer('👨‍💻 Frontend Dev');
const user2 = new Observer('🧑‍🔧 Backend Dev');

news.subscribe(user1);
news.subscribe(user2);

news.notify('📰 Вышло обновление паттернов!');
