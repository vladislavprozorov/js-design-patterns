// Command (Команда)
// Инкапсуляция запроса как объекта.
class Light {
  on() {
    console.log('💡 Свет включен');
  }
  off() {
    console.log('🌑 Свет выключен');
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

class Remote {
  submit(command) {
    command.execute();
  }
}

// Использование
const light = new Light();
const lightOn = new Command(() => light.on());
const lightOff = new Command(() => light.off());

const remote = new Remote();
remote.submit(lightOn);
remote.submit(lightOff);
