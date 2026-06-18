// let a = 2;
// let b = 10;
// console.log(a+b);

let arr = [1,2,3,4,5] ;
arr.forEach((el) => {
    console.log(el);
});
// // let print = function(el) {
// //     console.log(el);
// };
// arr.forEach(print);

// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el*2;
// });

// let gpa = students.map((el) => {
//     return el.marks/10;
// })

// let nums = [1,2,3,4,7,8,2,9,10,12,11];
// let ans = nums.filter((el) => {
//     return el%2==0; 
// });

// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el) =>  {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal);

// let arr = [1,4,5,6,8,2,4];
// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     }else {
//         return max;
//     }
// });
// console.log(max);

// let nums = [10,20,30,40];
// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);

// let nums = [10,20,40,36,5];
// let min = nums.reduce((min,el) => {
//     if(min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });
// console.log(min);

// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let char = [..."heloo"];

// let odd = [1,3,5,7];
// let even = [2,4,6,8];
// let nums = [...odd, ...even];

// let data = {
//     email: "rutuja@39",
//     password: "abcd",
// };

// let dataCopy = {...data ,id: 123 };

// function sum(...args) {
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us: ",args[i]);
//     }
// }

// let names = ["tony","bruce","peter","steve"];
// // let winner = names[0];
// // let runnerup = names[1];
// // let secondrunnerup = name[2];

// let [winner, runnerup, ...others] = names;

// const student = {
//     name: "rutuja",
//     age: 19,
//     class: 9,
//     sub: ["hindi","english","math","science"],
//     username: "rutuja@39",
//     password: "abcd"
// };
// let {username: user, password: secret, city = "Mumbai"} = student;

// const square = (a) => {
//    // return a*a;
//    console.log(a*a);
// }

// let nums = [1,2,3,4,5];
// const square = nums.map((num) => num*num);
// console.log(square);

// let sum = square.reduce((acc,cur) => acc+cur,0);
// let avg = sum/nums.length;
// console.log(avg);
// console.log(sum);

// let arr = [1,2,3,4,5];
// let newArr = arr.map((num) => num+5)
// console.log(newArr);

// let strings = ["adam","rutu","yellow","black"];
// console.log(strings.map((string) => string.toUpperCase()));

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v*2),
// ];
// doubleAndReturnArgs ([1,2,3],4,4);
// doubleAndReturnArgs ([2],10,4);

// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
// mergeObjects({a: 1, b: 2}, {c: 3, d: 4});

