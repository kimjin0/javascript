{
    console.log("########## 배열 추가/삭제 ##########");

    const arr = ["a", "b", "c"];

    //배열추가
    arr.push("d"); //
    console.log("push 뒤에 추가", arr);
    arr.pop(); //맨뒤에 삭제
    console.log("pop 뒤에서 삭제", arr);

    arr.unshift("e"); //앞에 추가
    console.log("unshift 앞에 추가", arr);

    arr.shift();
    console.log("shift 앞에서 삭제", arr);
}
{
    console.log("########## 배열 반복 ##########");
    const arr = ["aA", "bB", "cC"];
    // //배열을 반복
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // console.log("for of");
    // for (let value of arr) {
    //     console.log(value);
    // }

    // console.log("for each");
    // arr.forEach((value) => console.log(value));

    // const rst = arr.map((v) => {
    //     return v;
    //     // return v == "a" ? "aa" : v;
    // });

    // console.log(rst);
}
