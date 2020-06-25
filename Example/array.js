"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["사과", "바나나", "수박"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// a. for
console.log("3. Looping over an array");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let value of fruits) {
    console.log(value);
}
// c. forEach
fruits.forEach((value, index, array) => console.log(value, index));

// 4.Addtion, deletion, copy
// push : add on item to then end
fruits.push("복숭아");
console.log(fruits);

// pop : remove an item from the and
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift("딸기");
console.log(fruits);
// shift : remove an item from then benigging
fruits.shift("딸기");
console.log(fruits);

//note!! shift, unshift are slower than pop, push

//splice : remove an item by index position (지정된 위치에서 data 삭제)
console.log("remove an item by index position");
fruits.push("수박", "참외", "메론");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "키위", "포도"); //삭제하고 추가함.
console.log(fruits);

// combine tow arrays
console.log("combine tow arrays");
const fruits2 = ["모닝", "뉴모닝"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
console.log("5. Searching");
console.log(fruits);
console.log(fruits.indexOf("참외"));
console.log(fruits.indexOf("메로나"));
//요소가 있는가 확인후 true,false return
console.log(fruits.includes("메론"));
console.log(fruits.includes("코코나"));

//lastIndexOf (중복된 아이템에서 마지막 index 반환)
fruits.push("키위");
console.log(fruits);
console.log(fruits.indexOf("키위")); //(중복된 아이템에서 처음 나오는index 반환)
console.log(fruits.lastIndexOf("키위")); //(중복된 아이템에서 마지막 나오는index 반환)
