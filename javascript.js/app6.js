// function hello() {
//     console.log("Hello");
// }

// hello();
// hello();
// hello();

// function printName() {
//     console.log("apna college");
//     console.log("Rutuja Khade");
// }

// printName();

// function print1to5() {
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(){
//     let age = 23;
//     if(age >= 18) {
//         console.log("Adult");
//     }
//     else{
//         console.log("Not adult");
//     }
// }
// isAdult();

// function printPoem() {
//     console.log("twincle twincle, Little star");
//     console.log("How I wonder what you have");

// }
// printPoem();

// function printDice(){
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// printDice();

// //function with argument 
// function printName(name , age){
//     console.log(`${name}'s age is ${age}`);
// }
// printName("Rutuja",20);
// printName("Swaraj" , 14);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,2);

// function average3(a,b,c){
//     console.log((a+b+c)/3);
// }
// average3(2,4,6);

// function multiTable(n){
//     for(let i=n; i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// multiTable(2);

//return value
// function multiTable(n){
//     for(let i=n; i<=n*10;i+=n){
//             console.log(i);
//     }
// }

// function isAdult(age) {
//     if(age>=18) {
//         return "adult";
//     } else {
//         return "not adult";
//     }
// }

// function getSum(n) {
//     let sum = 0;

//     for(let i=1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }

// let str = ["hi","hello", "Bye","!"];

// function concat(str){
//     let result = "";

//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }

//     return result;
// }
//global scope let sum = 54;
//scope 
// function calSum(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// calSum(1,2);

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }

// let greet = "hello";

// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet); //lexical scope
//     }

//     innerGreet();
// }
// console.log(greet);
// changeGreet();

// let name = "Rutuja";
// let sum = function(a,b){
//     return a+b;
// }

// let hello = function(){
//     console.log("hello");
// }

// function multipleGreet(func,count) {
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet,2);

// let odd = function(n) {
//     console.log(!(n%2==0));
// }

// const calculator = {
//     num: 55,
//     add: function(a,b) {
//         return a+b;
//     },
//     sun: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b) {
//         return a*b;
//     }
// };
// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5;
// function grtElements(arr,num) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > num ) {
//             console.log(arr[i]);g
//         }
//     }
// }
// getElements(arr,num);

// let str = "abcdabcdefgggh";
// function getUnique(str) {
//     let ans = " ";
//     for(let i=0; i<str.length; i++){
//         let currChar=str[i];
//         if(ans.indexOf(currchar) == -1) {
//             ans += currchar;
//         }
//     }
//     return ans;
// }
// getUnique(str);