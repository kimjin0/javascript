// callback -> callback-to-promise.js -> promise-to-async.js

//1: 사용자에게 아이디, 비번 입력받음
//2: 로그인 성공이면 사용자 역활을 받음

/*
######## callBack ########
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
*/

// ######## callBack to Promise ########
class UserStorage {
    getUser(id, pwd) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === "kimjin0" && pwd === "qwe123") || (id === "coder" && pwd === "academy")) {
                    resolve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "kimjin0") {
                    resolve({ name: "kimjin0", role: "admin" });
                } else {
                    reject(new Error("no access"));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = "kimjin0";
const pwd = "qwe123";

userStorage //
    .getUser(id, pwd)
    .then(userStorage.getRoles)
    .then((user) => alert(`Hello ${user.name}, you have ${user.role}`));
