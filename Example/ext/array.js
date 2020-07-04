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

    console.log("for of");
    // for (let value of arr) {
    //     console.log(value);
    // }

    console.log("for each");
    arr.forEach((value) => console.log(value));

    const rst = arr.map((v) => {
        return v;
        // return v == "a" ? "aa" : v;
    });

    console.log(rst);
}
{
    console.log("splice() : 기존 배열 변하고 잘려진 배열을 반환홤.");
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(arr.splice(1, 2));
    console.log(arr);
}
{
    console.log(
        "slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다."
    );

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(arr.slice(1, 3));
    console.log(arr);
}
