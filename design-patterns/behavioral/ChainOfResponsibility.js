// Chain of Responsibility (Цепочка обязанностей) 
// Передача запроса по цепочке обработчиков.
class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }
  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.user) {
      return '❌ Не авторизован';
    }
    return super.handle(request);
  }
}

class RoleHandler extends Handler {
  handle(request) {
    if (request.role !== 'admin') {
      return '❌ Доступ запрещен';
    }
    return super.handle(request);
  }
}

class FinalHandler extends Handler {
  handle() {
    return '✅ Доступ разрешен';
  }
}

// Использование
const auth = new AuthHandler();
const role = new RoleHandler();
const final = new FinalHandler();

auth.setNext(role).setNext(final);

console.log(auth.handle({ user: 'John', role: 'admin' })); // ✅
console.log(auth.handle({ user: null })); // ❌
