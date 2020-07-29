// {
//     console.log("Q1. make a string out of an array");
//     const data = ["a", "b", "c"];
//     const result = data.join("+");
//     console.log(result);
// }
// {
//     console.log("Q2. make an array out of a string");
//     const data = "1, 2, 3, 4";
//     const array = data.split(",", 3);
//     console.log(array);
// }
// {
//     console.log("Q3. make this array look like this: [5, 4, 3, 2, 1]");
//     const array = [1, 2, 3, 4, 5];
//     console.log(array.reverse());
// }
// {
//     const array = [1, 2, 3, 4, 5, 6, 7];
//     const result = array.slice(2, 4);
//     console.log(array);
//     console.log(result);
// }

// {
//     class member {
//         constructor(name, age, enrolled, score) {
//             this.name = name;
//             this.age = age;
//             this.enrolled = enrolled;
//             this.scrore = score;
//         }
//     }
//     const members = [
//         new member("A", 10, true, 45),
//         new member("B", 20, true, 45),
//         new member("C", 50, true, 45),
//         new member("D", 70, true, 45),
//         new member("E", 80, true, 45),
//     ];
//     // console.log(members);
//     // members.map((member) => console.log(member.name));
//     // let result = members.filter((member) => member.age >= 20);

//     let results = members //
//         // .map((member) => member.age)
//         .filter((member) => member.age >= 50);

//     let result = results.map((member) => member.enrolled);
//     console.log(result);
// }

{
    const data = "1,2,3,4,5";
    const result = data.split(",", 3);
    console.log(result);
}
