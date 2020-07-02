// JSON
// JavaScript Object Notation

// 1. Object to JSON
//stringfy(obj)
console.log("1. Object to JSON");
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);
console.log("------ ");
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === "name" ? "kimjin0" : value;
});
console.log(json);

// 2. JSON to Object
console.clear();
console.log("2. JSON to Object");
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key:${key}, value:${value}`);

    return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();

//※ object를 json으로 변환할때 함수는 변환되지 않았고 DATA만 JSON으로 변환되었다.
// 그러하기에 다시 JSON으로 변환하여도 함수가 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 유용한 사이트:
// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/j...
