// Q1. make a string out of an array
{
    console.log('Q1. make a string out of an array');
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' and ');
    console.log(result);
}

// Q2. make an array out of a string
{
    console.log('Q2. make an array out of a string');
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 3);
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    console.log('Q3. make this array look like this: [5, 4, 3, 2, 1]');
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
}

// Q4. make new array without the first two elements
// 첫번째,두번째 제외한 3,4,5를 가지고 새로운 배열을 만들자.
{
    console.log('Q4. make new array without the first two elements');
    const array = [1, 2, 3, 4, 5];
    // ※slice 배열에서 원하는 부분만 리턴
    // ※splice 배열자체를 삭제하고 리턴함. (array자체를 변형하지 않고 새로운 배열을 만들어야 하기에 여기에서는 사용하면 않됨.)
    const result = array.slice(2, 5);

    console.log(array);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [new Student('A', 29, true, 45), new Student('B', 28, false, 80), new Student('C', 30, true, 90), new Student('D', 40, false, 66), new Student('E', 18, true, 88)];

// Q5. find a student with the score 90
{
    console.log('Q5. find a student with the score 90');
    const result = students.find(
        (student) => student.score === 90
        // console.log(student, index);
    );
    console.log(result);
}

// Q6. make an array of enrolled students
// 수업에 등록된 학생만 골라내어랴...
{
    console.log('Q6. make an array of enrolled students');
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// 점수만 뽑아내어서 새로운 배열을 만들어라...
// result should be: [45, 80, 90, 66, 88]
// 배열안에 들어있는 요소들을 불러와 가공하여 return할때 map을 사용하면 유용하다.
{
    console.log("Q7. make an array containing only the students' scores");
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 점수가 50보다 낮은 학생들이 있는가 확인하라...
{
    console.clear();
    const result = students.some((student) => student.score < 50); //하나라도 조건에 만족하면 true, 모든것이 만족하면 true를 반환하는 every 함수도 있다.
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// Q9. compute students' average score
// 학생들의 평균점수 구하기
{
    // const result = students.reduce((prev, curr) => {
    //     console.log("-------");
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 묶어서 사용할수도 있다.. 이런문장을 함수형 프로그램이라 한다.
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log('#####', result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// 낮은 점수가 먼저 나와 정렬하여라...
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}
