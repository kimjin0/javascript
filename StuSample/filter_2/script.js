"use strict";

class ShopManager {
    #items;
    #menu;
    #data;
    constructor(list) {
        this.items = document.querySelector(".items");
        this.menu = document.querySelector(".menu");
        this.data = list;

        this.displayItems(list);

        for (let i of this.menu.children) i.addEventListener("click", this.onClick.bind(this));
    }
    displayItems(list) {
        let data = "";
        let len = list.length;
        for (let item of list) {
            let img = `resource/${item[1]}_${item[0]}.png`;
            let description = `${item[2]}, ${item[3]} size`;
            data += `<li><img src="${img}" /><span>${description}</span></li>`;
        }
        this.items.innerHTML = data;
    }
    onClick(e) {
        let li = e.target.closest(".menu li");
        if (li == undefined) return;
        let list = this.data.filter((item) => {
            if (li.dataset.group == "color") return li.dataset.group2 == item[1];
            if (li.dataset.group == "type") return li.dataset.group2 == item[0];
        });
        this.displayItems(list);
    }
}

// 아이템 랜덤 생성
const ITEM_COLOR = ["blue", "yellow", "pink"];
const ITEM_TYPE = ["t", "s", "p"];
const ITEM_GENDER = ["male", "female"];
const ITEM_SIZE = ["small", "middle", "large"];
const COUNT = 30;

let list = [];
for (let i = 0; i < COUNT; i++) {
    let type = ITEM_TYPE[Math.trunc(Math.random() * ITEM_COLOR.length)];
    let color = ITEM_COLOR[Math.trunc(Math.random() * ITEM_TYPE.length)];
    let gen = type == ITEM_TYPE[1] ? ITEM_GENDER[1] : ITEM_GENDER[Math.trunc(Math.random() * 2)];
    let size = ITEM_SIZE[Math.trunc(Math.random() * ITEM_SIZE.length)];
    let item = [type, color, gen, size];
    list.push(item);
}

// starting point
let shop = new ShopManager(list);
