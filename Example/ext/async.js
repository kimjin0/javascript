function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getMenu1() {
    await delay(2000);
    return "🥗";
}

// getMenu1().then(console.log);
// getMenu1().then((menu) => {
//     console.log(menu);
// });

let userConfirm = function (id, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                (id === "kimjin0" && password === "qwe123") ||
                (id === "coder" && password === "academy")
            ) {
                resolve(id);
            } else {
                reject(new Error("not found"));
            }
        }, 2000);
    });
};

async function getUser(id, password) {
    let user = await userConfirm(id, password);
    return user;
}

// const id = prompt("enter your id");
// const password = prompt("enter your password");
// const user = getUser("kimjin0", "qwe123");
// console.log(user);

// class UserStorage {
// 	loginUser(id, password) {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				if (
// 					(id === "kimjin0" && password === "qwe123") ||
// 					(id === "coder" && password === "academy")
// 				) {
// 					resolve(id);
// 				} else {
// 					reject(new Error("not found"));
// 				}
// 			}, 2000);
// 		});
// 	}

// 	getRoles(user) {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				if (user === "kimjin0") {
// 					resolve({ name: "kimjin0", role: "admin" });
// 				} else {
// 					reject(new Error("no access"));
// 				}
// 			}, 1000);
// 		});
// 	}
// }

//숙제 callback-to-promise.js를 async 코드를 이용해서 해봐라...

function loginUser(id, password) {
    setTimeout(() => {
        if (
            (id === "kimjin0" && password === "qwe123") ||
            (id === "coder" && password === "academy")
        ) {
            return id;
        } else {
            return new Error("not found");
        }
    }, 2000);
    // return id;
}
// let id = "kimjin0";
// let password = "qwe123";

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "kimjin0" && password === "qwe123") ||
                    (id === "coder" && password === "academy")
                ) {
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
async function asyncFunc() {
    const user = await userStorage.loginUser("kimjin0", "qwe123");
    const getRoles = await userStorage.getRoles(user);
    return `${getRoles.name} + ${getRoles.role}`;
}

asyncFunc().then(alert);
