//async & awzit
//clear style of usin promise

//1. async
async function fetchUser() {
    // do network request in 10 secs....
    return "kimjin0";
}

const user = fetchUser();
user.then(console.log);

//2. await
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
    await delay(2000);
    return "🍎";
}
async function getBanana() {
    await delay(1000);
    return "🍌";
}
//만약 promise를 이용한다면 체인닝을 사용해야 한다.
function getPromiseBanana() {
    return delay(3000).then(() => "🍌");
}

//Promise도 중첩으로 체이닝을 하게되면 콜백지옥과 비슷하게 된다. ~^^;
//만약 Promise를 이용해서 사과를 받아오고 그리고 바나나를 받아온다면
// function picFruits() {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple}+${banana}`);
//     });
// }
// picFruits().then(console.log);

// 위 코드를 async, await를 이용한다면
// async function picFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// picFruits().then(console.log);

//위 직렬화 코드를 병렬로 바꾸자
async function picFruits() {
    const applePromise = getApple();
    const bananapromise = getBanana();
    const apple = await applePromise;
    const banana = await bananapromise;

    return `${apple} + ${banana}`;
}
picFruits().then(console.log);

//위 코드는 뭔가 복잡하다... promise api를 하용하면 함수로 배열로 전달하고 자동으로 배열을 return
//3. userful APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((fruits) =>
        fruits.join("+")
    );
}
pickAllFruits().then(console.log);

//바나나, 사과 둘 중에 먼저 return 되는거 반환
function pickOnlyOne() {
    return Promise.race([getBanana(), getApple()]);
}
pickOnlyOne().then(console.log);

//숙제 callback-to-promise.js를 async 코드를 이용해서 해봐라...
