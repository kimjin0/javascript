"use strict";
//JavaScript is synchronous.
//Excute the code block by orger after hoisting.
//hoisting:var, function declaration
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

//Synchronous(동기) callback
printCall(() => console.log("hello"));
function printCall(print) {
    print();
}
//Asynchronous(비동기) callback
printWithDelay(() => console.log("async callback"), 2000);
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
//https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11
//10:50까지 들음
