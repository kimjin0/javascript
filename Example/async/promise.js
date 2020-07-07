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

// 3. Promise chaining
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

// 16:50 시청
// https://youtu.be/JB_yU6Oe2eE?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2
