// State (Состояние)
// Объект изменяет поведение в зависимости от своего состояния.
class TrafficLight {
  constructor() {
    this.states = [new Green(), new Yellow(), new Red()];
    this.current = 0;
  }
  change() {
    this.current = (this.current + 1) % this.states.length;
  }
  signal() {
    return this.states[this.current].signal();
  }
}

class Green {
  signal() {
    return '🟢 Ехать';
  }
}
class Yellow {
  signal() {
    return '🟡 Подождать';
  }
}
class Red {
  signal() {
    return '🔴 Стоп';
  }
}

// Использование
const light = new TrafficLight();
console.log(light.signal()); // 🟢
light.change();
console.log(light.signal()); // 🟡
