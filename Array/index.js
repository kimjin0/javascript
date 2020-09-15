// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
let fruits = ['사과', '바나나', '딸기'];

//배열의 항목들을 순환하며 처리하기
fruits.forEach((item, index, array) => console.log(item, index));

let myList = [1, 2, 3];

myList.push('끝에추가');
myList.unshift('앞에추가');
myList.shift(); //앞에제거
myList.pop(0); //끝에제거
console.log(myList);

let pos = myList.indexOf(2);
console.log(pos);

let removedItem = fruits.splice(1, 2, '포도', '수박'); //사과, 포도, 수박

console.log(removedItem);
console.log(fruits);

let spliceArray = ['양배추', '순무', '무', '당근'];
// console.log('원 배열', spliceArray);
let remoedItems = spliceArray.splice(1, 2);
console.log('복제 배열', remoedItems); //순무, 무
console.log('원 배열', spliceArray); //양배추, 당근

console.log('### 배열 복사하기 ###');
let sliceArray = ['양배추', '순무', '무', '당근'];
let copyArray = sliceArray.slice(1, 3);
console.log('복제 배열', copyArray); //순무, 무
console.log('원 배열', sliceArray); //양배추, 순무, 무, 당근
