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

// Callback Hell example (콜백지옥 체험하기)
//1: 사용자에게 아이디, 비번 입력받음
//2: 로그인 성공이면 사용자 역활을 받음
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "kimjin0" && password === "dream") ||
                (id === "coder" && password === "academy")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "kimjin0") {
                onSuccess({ name: "kimjin0", role: "admin" });
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(
                    `Hello ${userWithRole.name}, you have ${userWithRole.role} role`
                );
            },
            (error) => {
                console.log(error);
            }
        );
    },
    (error) => {
        console.log(error);
    }
);
// 18.54초까지 진행함. (https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11)
