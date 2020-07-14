function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getMenu1() {
    await delay(2000);
    return "🥗";
}

// getMenu1().then(console.log);
getMenu1().then((menu) => {
    console.log(menu);
});
