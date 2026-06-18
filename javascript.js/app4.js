// console.log("1");

//for loop
// for(let i = 10; i>=1; i--){
//     console.log(i);
// }

//odd no from 1 to 15
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("backwars");
// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

//even numbers 1to 10
// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

// console.log("backwards");
// for(let i=10; i>=2; i=i-2){
//     console.log(i);
// }

//multi of 5
// let n = prompt("Write your nummber");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//nested loops
// for(let i=1; i<=3; i++){
//     console.log("outer loop " + i );
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

//while loop
// let i = 5;
// while(i<=50){
//     console.log(i);
//     i=i+5;
// }

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// console.log("backwards");
// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// let i = 0;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }

// const favMovie = "avatar";

// let guess = prompt("guess my fav movie");
// while((guess=!favMovie) && (guess!="quit")){
//     guess = prompt("wrong guess. pleasr try again");
// }
// if(guess == favMovie){
//     console.log("congrates");
// }

// let i = 1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

//loops with arrays
// let fruits = ["apple","banana","Mango","Litchi","pineapple"];
// // for(let i=0; i<fruits.length; i++){
// //     console.log(i,fruits[i]);
// // }
// let i = fruits.length;
// while(i>=0){
//     console.log(i,fruits[i])
//     i--;
// }

//nested loops with nested arrays
// let heros = [
//     ["ironman","spiderman","thor"],
//     ["superman","wonderman","flash"]
// ]

// for(let i=0; i<heros.length; i++){
//     console.log([i],heros[i]);
//     for(let j=0; j<heros[i].length; j++){
//         console.log(`j=${j}, ${heros[i][j]}`);
//     }
// }

// let student = [["aman" ,95],["shradha",94.3],["karan",100]];

// for(let i=0; i<student.length; i++){
//     for(let j=0; j<student[i].length; j++) {
//         console.log(student[i][j]);
//     }
// }

//for of loop
// let fruits = ["mango","apple","banaa","orange"];
// for(fruits of fruits){
//     console.log(fruits);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

let todo = [];

let req = prompt ("please enter your request");
while(true){
    if(req == "quit"){
        console.log("quiting qpp");
        break;
    }
    if(req == "list"){
        console.log("-------");
        for(task of todo){
            console.log(task);
        }
        console.log("---------");
    }else if(req == "add"){
        let task = prompt("please enter the task you wanst to add");
        todo.push(task);
        console.log("task added");
    }
}