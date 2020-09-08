// 정의 : 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
// 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let a, b, rest;

// [a, b] = [10, 20];
// console.log(a); // 10

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest); // Array [30,40,50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
// console.log(a);
// console.log(rest);

// ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c:30, d:40}

console.log('### 배열 구조 분해 ###');
let foo = ['one', 'two', 'three', '1', '2', '3'];
let [one, , three, ...rest2] = foo;
console.log(one); // "one"
// console.log(two); // "two"
console.log(three); // "three"
console.log(rest2); // "three"

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

console.log('### 객체 구조 분해 ###');
let o = { p: 42, q: true };
let { p, q } = o;
console.log(p);

console.log('#선언 없는 할당');
//'#참고: 할당 문을 둘러싼 ( .. )는 선언 없이 객체 리터럴(object literal) 비구조화 할당을 사용할 때 필요한 구문입니다.'
let a2, b2;
({ a2, b2 } = { a2: 1, b2: 2 });
console.log(a2);

console.log('#새로운 변수 이름으로 할당하기');
//객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있습니다.
let o1 = { p: 42, q: true };
let { p: foo1, q: bar1 } = o1;
console.log(foo1);

console.log('#기본값');
//객체로부터 해체된 값이 undefined인 경우, 변수에 기본값을 할당할 수 있습니다.
let { a3 = 20, b3 = 50 } = { a3: 3 };
console.log(a3);
console.log(b3);

//새로운 변수명 할당과 기본값 할당을 한번에 할 수 있습니다.
let { a4: aa1 = 50, b4: bb1 = 40 } = { a4: 3 };
console.log(aa);

// 여기공부할차례 >>> ## 함수 매개변수의 기본값 설정하기(ES5 버전)
