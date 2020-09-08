// 정의 : 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
// 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let a, b, rest;

[a, b] = [10, 20];
console.log(a); // 10

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // Array [30,40,50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c:30, d:40}

console.log('### 배열 구조 분해 ###');
let foo = ['one', 'two', 'three'];
let [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

console.log('# 변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있습니다. #');
let aa, bb;
[aa, bb] = [1, 2];
console.log(aa); //1
console.log(bb); //2

console.log('# 함수가 반환한 배열 분석 #');
function f() {
    return [1, 2, 3, 4, 5, 6];
}
let a1, b1, c1, rest1;
[a1, b1, ...rest1] = f();
console.log(a1);
console.log(b1);
console.log(rest1);

console.log('# 일부 반환 값 무시하기 #');
[a1, , c1, ...rest1] = f();
console.log(a1);
console.log(c1);
console.log(rest1);
