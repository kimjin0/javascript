"use strict";
// https://youtu.be/JB_yU6Oe2eE?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2

//Promise is a JavaScfript object for asynchronous operation.
//state : pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
// when new Promiseis created, the cexcutor runs automatically.
console.log("1. Producer");
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log("dogin something...");
    setTimeout(() => {
        resolve("kimjin0");
    }, 2000);
});

//2. Consumers : then, catch, finally
promise.then((value) => {
    console.log(value);
});
// 10:00 시청
// https://youtu.be/JB_yU6Oe2eE?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2
