let fruits = ['사과', '바나나'];

//배열의 항목들을 순환하며 처리하기
fruits.forEach((item, index, array) => console.log(item, index));

let myList = [1, 2, 3];
myList.push('끝에추가');
myList.unshift('앞에추가');
myList.shift(); //앞에저게
myList.pop(); //뒤에제거

console.log(myList);
