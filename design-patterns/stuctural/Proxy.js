// Контроль доступа к объекту (например, логгирование или защита).
class UserService {
  getUser(id) {
    return { id, name: 'John Doe' };
  }
}

class UserServiceProxy {
  constructor() {
    this.service = new UserService();
  }

  getUser(id) {
    console.log(`Accessing user ${id}`);
    return this.service.getUser(id);
  }
}

const proxy = new UserServiceProxy();
console.log(proxy.getUser(1));
