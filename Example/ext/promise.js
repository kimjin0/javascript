const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(2);
	}, 2000);
});

fetchNumber //
	.then((num) => num * 2)
	.then((num) => console.log(num));
