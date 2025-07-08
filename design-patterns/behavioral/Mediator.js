//  Mediator (Посредник) 
// Координирует взаимодействие между объектами.
class ChatRoom {
  showMessage(user, message) {
    console.log(`${user.name}: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }
  send(message) {
    this.chatroom.showMessage(this, message);
  }
}

// Использование
const chatroom = new ChatRoom();
const alice = new User('Alice', chatroom);
const bob = new User('Bob', chatroom);

alice.send('Привет, Bob!');
bob.send('Привет, Alice!');
