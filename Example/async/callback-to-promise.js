"use strict";

// callback.js , 콜백지옥의 코드를 Promise 이용해서 깔끔하게 해결....

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
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage //
	.loginUser(id, password)
	.then(userStorage.getRoles)
	.then((user) => alert(`Hello ${user.name}, you have ${user.role} role`))
	.catch(console.log);

// userStorage.loginUser(
// 	id,
// 	password,
// 	(user) => {
// 		userStorage.getRoles(
// 			user,
// 			(userWithRole) => {
// 				alert(
// 					`Hello ${userWithRole.name}, you have ${userWithRole.role} role`
// 				);
// 			},
// 			(error) => {
// 				console.log(error);
// 			}
// 		);
// 	},
// 	(error) => {
// 		console.log(error);
// 	}
// );

// https://youtu.be/JB_yU6Oe2eE?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2
