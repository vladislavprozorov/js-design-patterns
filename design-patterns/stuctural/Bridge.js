// Отделение абстракции от реализации.
class DrawingAPI1 {
  drawCircle(x, y, radius) {
    console.log(`API1 drawing circle at (${x}, ${y}) with radius ${radius}`);
  }
}

class DrawingAPI2 {
  drawCircle(x, y, radius) {
    console.log(`API2 drawing circle at (${x}, ${y}) with radius ${radius}`);
  }
}

class Circle {
  constructor(x, y, radius, drawingAPI) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.drawingAPI = drawingAPI;
  }

  draw() {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }
}

const circle1 = new Circle(1, 2, 3, new DrawingAPI1());
const circle2 = new Circle(4, 5, 6, new DrawingAPI2());

circle1.draw();
circle2.draw();
