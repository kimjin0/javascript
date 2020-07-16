const obj1 = {};

{
    const user = { name: "kimjin", age: 10 };
    function print(person) {
        console.log(person.name);
        console.log(person.age);
    }

    function printValue(obj, key) {
        console.log(obj[key]);
    }

    printValue(user, "name");
    printValue(user, "age");
}
{
    function makeObj(name, age) {
        return {
            name,
            age,
        };
    }
    const person = makeObj("kimjin0", 4);

    // person.nick = "hahaha"; //추가
    // delete person.nick; //삭제
    // console.log(person);

    // console.log("name" in person);
    // console.log("nick" in person);

    // const person2 = person;
    // person2.name = "gaius";
    // console.log(person);
    // console.log(person2);

    //assign
    // const person3 = Object.assign({}, person);
    // person3.name = "gaius";
    // console.log(person);
    // console.log(person3);
    const person2 = { nickname: "aaaaa" };
    person3 = Object.assign({}, person, person2);
    console.log(person3);
}
