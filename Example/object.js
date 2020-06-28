// Objecjs
// one of the JavaScript's dat tyypes,
// a collection of relatecd  data and/or functionality.JavaScript
// Nearly all objects in JavaScript are instances of Object
// object = {key, value};

// #1 Literals and properties
console.log("#1 Literals and properties");
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: "kimji0", age: 10 };
print(ellie);

//RunTime 언어이므로 실행중에 선언 할수도 있음
ellie.hasJob = true;
console.log(ellie);

delete ellie.hasJob;
console.log(ellie);

// #2. Computed properties
console.log("#2. Computed properties");
console.log(ellie.name);
console.log(ellie["name"]); //key should be always string
// Computed properties 언제 사용하나???
// 어떠한 key 있는지 모를때, 실시간으로 값을 가져올때.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// #3. Property value shorthand
console.log("#3. Property value shorthand");
const person1 = { name: "bob", age: 1 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("kimjin0", 4);
console.log(person4);
const person5 = new Person("gaius", 5);
console.log(person5);

function makePerson(name, age) {
    return {
        name,
        age,
    };
}
// #4. Constuctor Function
console.log("#4. Constuctor Function");
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// #5. in operator : property existence check ( key in obj)
console.log("#5. in operator : property existence check ( key in obj)");
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);

//#6. for..in VS for..of
console.log("#6. for..in VS for..of");
// for ( key in obj)
for (key in ellie) {
    console.log(key);
}
// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

// #7. Function cloning
// Object.assign(dest, [obj1, obj2 ...])
const user = { name: "kimjin0", age: "10" };
const user2 = user;
user2.name = "gaius";
console.log(user); //ref 주소도 복사 되었기에 user.name 변경됨. (문제있음)

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
user3.name = "kimjin0";
console.log(user3);

//assign
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
