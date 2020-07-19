// callback -> callback-to-promise.js -> promise-to-async.js

//1: 사용자에게 아이디, 비번 입력받음
//2: 로그인 성공이면 사용자 역활을 받음

class UserStorage {
    getUser(id, pwd, onSuccess, onError) {
        setTimeout(() => {
            if ((id === "kimjin0" && pwd === "qwe123") || (id === "coder" && pwd === "academy")) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }
    getRole(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "kimjin0") {
                onSuccess({ name: "kimjin0", role: "admin" });
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }
}

const userStorage = new UserStorage();
const id = "kimjin0";
const pwd = "qwe123";

userStorage.getUser(
    id,
    pwd,
    (user) => {
        userStorage.getRole(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have ${userWithRole.role} role`);
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
