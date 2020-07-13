{
    console.log("Q1. make a string out of an array");
    const data = ["a", "b", "c"];
    const result = data.join("+");
    console.log(result);
}
{
    console.log("Q2. make an array out of a string");
    const data = "1, 2, 3, 4";
    const array = data.split(",", 3);
    console.log(array);
}
{
    console.log("Q3. make this array look like this: [5, 4, 3, 2, 1]");
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
}
{
    const array = [1, 2, 3, 4, 5, 6, 7];
    const result = array.slice(2, 4);
    console.log(array);
    console.log(result);
}
