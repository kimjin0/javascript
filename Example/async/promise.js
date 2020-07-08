"use strict";
// https://youtu.be/JB_yU6Oe2eE?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2

//Promise is a JavaScfript object for asynchronous operation.
//state : pending -> fulfilled or rejected
//Producer vs Consumer

// 1. Producer
// when new Promiseis created, the cexcutor runs automatically.
console.log("1. Producer");
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log("Logging in...");
    setTimeout(() => {
        resolve("kimjin0");
        // reject(new Error("no network"));
    }, 2000);
});

// 2. Consumers : then, catch, finally
console.log("2. Consumers : then, catch, finally");
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });

// 3. Promise chaining => then
console.log("3. Promise chaining => then");
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then((num) => console.log(num));

// 4. Promise chaining => Error Handling
console.log("4. Promise chaining => Error Handling");
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐔"), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen}=>🥚`), 1000);
        setTimeout(() => reject(new Error(`${hen}=>🥚`)), 1000);
    });

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg}=>🍪`), 1000);
    });

// getHen()
//     .then((hen) => getEgg(hen))
//     .then((egg) => cook(egg))
//     .then((meal) => console.log(meal));

// 아래와 같이 value을 생략할수 있다.
getHen() //
    .then(getEgg)
    .catch((error) => {
        return "🍤";
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

//5. callback hell을 promise로 변경하여 보자...
//여기까지 시청 : https://youtu.be/JB_yU6Oe2eE?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2
