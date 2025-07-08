// Упрощённый доступ к сложной подсистеме.  Позволяет клиенту не вникать в детали внутренней реализации.
class CPU {
  freeze() {
    console.log('CPU freeze');
  }
  execute() {
    console.log('CPU execute');
  }
}

class Memory {
  load(address, data) {
    console.log(`Memory load from ${address}: ${data}`);
  }
}

class HardDrive {
  read() {
    return 'OS boot data';
  }
}

// Фасад
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.freeze();
    const data = this.hardDrive.read();
    this.memory.load(0, data);
    this.cpu.execute();
  }
}

// Клиент
const pc = new ComputerFacade();
pc.start();
