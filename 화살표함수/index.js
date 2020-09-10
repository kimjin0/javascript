// 'use strict';
// MDN : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98

// 매개변수 목록 내 구조분해할당도 지원됨.
var f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
console.log(f());

// 짧은 함수
const items = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// 보통의 함수
items.map(function (item) {
    console.log('보통의 함수 : ' + item.length);
});
//잛아짐 1단계
console.log(items.map((item) => item.length));

//잛아짐 2단계
// 이 경우 length 속성만 필요하므로 destructuring(구조화) 매개변수를 사용할 수 있다.
// 'length'는 우리가 얻고자 하는 속성에 해당하는 반면,
// size'는 변경 가능한 변수의 이름일 뿐이므로
// 원하는 유효한 변수명으로 변경할 수 있다
let rst = items.map(({ length: size }) => size);
console.log(rst); // [8, 6, 7, 9]

//잛아짐 3단계
// destructuring(구조화) 파라미터 할당도 아래와 같이 작성할 수 있습니다.
// 이 예에서 정의한 객체내의 'length'에 값을 지정하지 않은 점에 주목하세요. 대신, "length" 변수의
// 리터럴 이름은 우리가 해당 객체에서 꺼내오고 싶은 속성이름 자체로 사용됩니다.
let rst1 = items.map(({ length }) => length);
console.log(rst1); // [8, 6, 7, 9]

console.log('### 바인딩 되지 않은 arguments ###');
// 화살표 함수는 arguments 객체를 바인드 하지 않습니다.
// 때문에, arguments는  그저 둘러싸는 범위(scope) 내 이름에 대한 참조입니다.
var arguments = [1, 2, 3];
var arr = (n) => console.log(arguments[0]);
arr(4); // 1

var arr2 = function (n) {
    console.log(arguments[0]); //arguments가 바인딩되어 넘겨준 4가 나옴. 이게 화살표함수에서 안된다는 뜻
};
arr2(4); //4

var func = () => ({ foo: 1 });
console.log(func);
