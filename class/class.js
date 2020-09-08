// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes

// #### Prototype methods
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     // Getter
//     get area() {
//         return this.calcArea();
//     }

//     //Method
//     calcArea() {
//         return this.width * this.height;
//     }
// }

// const square = new Rectangle(10, 10);
// console.log(square.area);
// console.log(square.calcArea());

// #### Static methods
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.hypot(dx, dy);
//     }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// p1.distance; //undefined => 클래스의 인스턴스에서는 호출할 수 없습니다
// p2.distance;

// //정적 메소드는 클래스의 인스턴스화(instantiating) 없이 호출되며
// console.log(Point.distance(p1, p2));

// #### extends를 통한 클래스 상속
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// let a = new Dog('Mitzie');
// let b = new Dog('kakao');
// a.speak();
// b.speak();
// class 상속 따라하기
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}의 이름을 가진 동물 입니다.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name}의 이름을 가진 멍멍이 입니다.`);
    }
}
const animal = new Animal("바둑이");
const dog = new Dog("바둑이");

animal.speak();
dog.speak();

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
