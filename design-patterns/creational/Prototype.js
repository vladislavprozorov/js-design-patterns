/* Prototype — это порождающий паттерн, который позволяет клонировать объекты, не привязываясь к конкретным классам. 
Вместо создания объектов с new, мы копируем уже существующие.*/
const carPrototype = {
  wheels: 4,
  drive() {
    console.log('Driving with', this.wheels, 'wheels');
  },
};
// Создание нового объекта на основе прототипа
const myCar = Object.create(carPrototype);
myCar.drive(); // Driving with 4 wheels
