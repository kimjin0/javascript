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
    await delay(3000);
    return "🍎";
}
async function getBanana() {
    await delay(3000);
    return "🍌";
}
//만약 promise를 이용한다면 체인닝을 사용해야 한다.
function getPromiseBanana() {
    return delay(3000).then(() => "🍌");
}

//Promise도 중첩으로 체이닝을 하게되면 콜백지옥과 비슷하게 된다. ~^^;
//만약 Promise를 이용해서 사과를 받아오고 그리고 바나나를 받아온다면
function picFruits() {
    return getApple().then((apple) => {
        return getBanana().then((banana) => `${apple}+${banana}`);
    });
}

picFruits().then(console.log);

// 여기까지 청취
