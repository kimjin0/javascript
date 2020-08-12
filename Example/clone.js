var favoriteThing = {
    type: 'Animal',
    name: 'Cat',
};

const a = {
    name: 'Tom',
    age: 10,
    pet: favoriteThing,
};

const b = a;
b.name = 'Jerry'; // Will update both a and b

let c = { ...a };

// c.pet.name = 'Dog';
// c.name = 'kimjin0';
// console.log(c);
// console.log(a);

console.log(a === b); // true
console.log(a === c); // false

console.log('=======================================');
var favoriteThing = {
    type: 'Animal',
    name: 'Cat',
};

var person = {
    name: 'Tom',
    favorite: favoriteThing,
};

var otherPerson = { ...person };

// true
console.log(person.favorite === otherPerson.favorite);
console.log(person === otherPerson);
