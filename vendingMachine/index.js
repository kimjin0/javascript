let objGoods = [];
(function addGoods() {
    objGoods.push({ id: 1, price: 2000, goods: "ICE 아메리카노" });
    objGoods.push({ id: 2, price: 2500, goods: "HOT 아메리카노" });
    objGoods.push({ id: 3, price: 3000, goods: "카푸치노" });
    objGoods.push({ id: 4, price: 2000, goods: "콜라" });
    objGoods.push({ id: 5, price: 2000, goods: "사이다" });

    // console.log(objGoods);
})();
const checkItem = (item) => {
    if (item.length < 1) {
        console.log("error > 준비된 상품이 업습니다.");
    } else {
        console.log("잠시만요...");
    }
};
const getItem = (choiceId, InputPrice, goods) => {
    let outItem = objGoods.filter((item) => item.id === choiceId);
    checkItem(outItem);
};

// const vendingMachine = (choiceId, InputPrice, goods) => {
//     let outItem = objGoods.filter((item) => item.id === choiceId);
// };
getItem(1, 200, "FF");
