const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const result = words.filter((words) => words.length > 6);
console.log(result);

const result1 = words.filter(({ length }) => length > 6);
console.log(result1);

const result2 = words.filter(({ length: size }) => size > 6);
console.log(result2);
