// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const result = words.filter((words) => words.length > 6);
console.log(result);

const result1 = words.filter(({ length }) => length > 6);
console.log(result1);

const result2 = words.filter(({ length: size }) => size > 6);
console.log(result2);
