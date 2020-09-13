let fruits = ['사과', '바나나'];

//배열 끝에 항목 추가하기
fruits.push('딸기'); //["사과", "바나나", "딸기"]

// 배열 끝에서부터 항목 제거하기
fruits.pop(); //["사과", "바나나"]

//배열 앞에서부터 항목 제거하기
fruits.shift(); //["바나나"]

//배열의 항목들을 순환하며 처리하기
fruits.forEach((item, index, array) => console.log(item, index, array));
