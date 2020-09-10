// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters
// ## Rest 파라미터 구문은 정해지지 않은 수(an indefinite number, 부정수) 인수를 배열로 나타낼 수 있게 합니다.

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        //   return previous + current;
        console.log(previous, current);
    });
}

console.log(sum(1, 2, 3));

// Rest 파라미터 해체
// 예제 1
function f(...[a, b, c]) {
    return a + b + c;
}

f(1); // NaN (b 와 c 는 undefined)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (4번 째 파라미터는 해체되지 않음)

// 예제 2
console.log('하나의 값만 있더라도 마지막 인수는 여전히 배열을 갖습니다.');
myFun('one', 'two', 'three');

// a, one
// b, two
// manyMoreArgs, [three]

// 예제 3
console.log('theArgs 가 배열이므로, length 프로퍼티를 사용해 엘리먼트의 수를 얻을 수 있습니다.');
function fun1(...theArgs) {
    console.log(theArgs.length);
}
fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3

//예제4
console.log('rest 파라미터는 첫 번째 인수 다음의 모든 인수를 배열로 모으는데 사용됩니다. 각각은 첫 번째 파라미터와 곱해져 배열로 반환됩니다');
// 요건함 따라 해보자...
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
