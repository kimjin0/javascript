// find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 6);
console.log(found); //12

// ## 속성 중 하나를 사용하여 배열에서 객체 찾기
var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];

// let result = inventory.find((fruit) => fruit.name === "bananas");
let result = inventory.find((fruit) => fruit.name === 'cherries');
console.log(result);

var auth = [
    { key: '1차작사심사', value: '심사자' },
    { key: '2차작사심사', value: '관리자' },
    { key: '합창심사', value: '심사자,관리자' },
    { key: '작곡심사', value: '관리자' },
];

// let result2 = auth.find((item) => item.key === '합창심사');
// console.log(result2);
// console.log(result2.value.split(','));

function userInfo(auth, whois) {
    let result2 = auth.find((item) => item.key === whois);
    if (result2 === undefined) {
        return false;
    }
    return result2;
    // console.log(result2);
    // console.log(result2.value.split(','));
}

function whoise({ key: key, value: auth }) {
    if (key === undefined) {
        return false;
    } else {
        return auth;
    }
}

console.log(whoise(userInfo(auth, '합창심사')));
