// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.

let str = '정규식을 이용하여 대상 스트링에서 모든 부분을 수정해 대상을 줄 수 있다.';
let searchWord = '대상';
let regexp = new RegExp(searchWord, 'g');
console.log(regexp);
str = str.replace(regexp, '');

console.log(str);
// e.innerHTML = e.innerHTML.replace(regexp, `<span class="light">${searchWord}</span>`);

let re = /(\w+)\s(\w+)/;
let str2 = 'John Smith';
let newstr = str2.replace(re, '$2, $1');
console.log(newstr);

// let str3 = new RegExp(/ab+c/, 'i'); // 리터럴
// console.log(str3);

console.log(new RegExp(/ab+c/, 'i')); // 리터럴
console.log(new RegExp('ab+c', 'i')); // 생성자

var reg = new RegExp('정규', 'gimsuy');

console.log(reg);
console.log(str.replace(reg, '김진형'));
