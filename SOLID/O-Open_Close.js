/*
    Software should be open for
    extensions, but closed for modification,
    basically implies that a behaviour
    of a module could be extended without modifying it's
    source code
*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  static calculateArea(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.area(), 0);
  }
}
