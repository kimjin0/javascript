class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
    draw() {
        super.draw;
        console.log(`🍕`);
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
