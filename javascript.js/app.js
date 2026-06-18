// let smallImages = document.getElementsByClassName("oldImag");
// for(let i = 0; i < smallImages.length; i++) {
//     console.dir(smallImages[i].src);
// }

// console.dir(document.querySelector("h1"));
// console.log("hi");
// let a = 10;
// let b = 3;
// if(a = b){
//     console.log(a = b);
// }
// else{
//     console.log(a =! b);
// }

// let links = document.querySelectorAll("box a");
// for(let i=0; i<links.length; i++){
//     links[i].computedStyleMap.color = "yellow";
// }

// let num = 20;
// if(num/10){
//     console.log("good");
// }
// else{
//     console.log("not good");
// }

// let name = prompt("please enter your name  ");
// let age = prompt("Please enter your age");
// alert(`${name} is ${age} years old`);

// let Months = "Quarters4";
// switch(Months){
//     case "Quarter1":
//         console.log("January, February, March");
//         break;
//     case "Quarter2" :
//         console.log("April,May,June");
//         break;
//     case "Quarter3":
//         console.log("July,Aug,Sep");
//         break;
//     case "Quarters4":
//         console.log("Oct,Nov,Dec");
//         break;
//     default:
//         console.log("no months");
// }

// let str = "apples";
// if((str[0]=='a' || str[0] == 'A') && (str.length > 5)){
//     console.log("golden string");
// }
// else{
//     console.log("not a golden string");
// }

// let numA = 10;
// let numB = 5;
// let numC = 30;
// if((numA > numB) && (numA > numC)){
//     console.log("A is gretar among 3: " );
// }
// else if((numB > numA) && (numB > numC)){
//     console.log("B is greater");
// }
// else {
//     console.log("C is greater");
// }
// let num1 = 32;
// let num2 = 47852;
// if(num1 % 10 ==  num2 % 10 )
// {
//     console.log("same last digit", num1%10);
// }
// else{
//     console.log("not same");
// }

// let arr = [7,9,0,-2];
// let n=3;
// let ans = arr.slice(arr.length-n);
// console.log(ans);

// let str = prompt("please enter a string");

// if(str.length == 0){
//     console.log("string is empty");
// }
// else{
//     console.log("String is not empty");
// }

// const stu = {
//     name : "rutu",
//     age : "20",
//     marks : "86",
//     city : "Delhi"

// };

// const car = {
//     name : "thar",
//     model : "78",
//     color : " yellow",
// };

// const person = {
//     name : "ruutja",
//     age : "20",
//     city : "Hyedarabad",
// };

// function hello(){
//     console.log("rutuja");
// }

// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("button was clicked");
// }


//js 11
// setTimeout(() => {
//     console.log("apna college");
// }, 3000);

// console.log("hello..");

// h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color =  "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

//callback hell (asynchrones)
// function savetoDb(data, success, failure ){
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if (internetSpeed > 4){
//         success();
//     }else {
//         failure();
//     }
// }
// savetoDb("apna college", () =>{
//     console.log("Success : your data was saved : ");
// },
//  () => {
//     console.log("Failure : weak connection . data not saved");
//  });


//promise 
// function savetoDb(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve(" Success : data was saved ");
//         }
//         else{
//             reject("failure : week connection");
//         }
//     })
// }
//  let request = savetoDb("apna college");  //req = promise object
//  request.then(() => {
//     then(()=> {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected ");
//     })
//  })
 //console.log(request);
 //orr
// savetoDb("apna college")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     })

//promises argument 
// savetoDb("apna college")
//     .then((result) =>{
//     console.log("data1 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("helloworld");
//     })
//     .then((result) =>{
//     console.log("data2 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("rutuja");
//     })
//     .catch((error) => {
//         console.log("data3 saved");
//         console.log("result of promise: ", result);
//     })

// async function greet(){
//     return "hello!";
// }
// greet()
// .then(()=> {
//     console.log("promise was reoslved ");
//     console.log("result was : " , result);
// })
// .catch((error)=> {
//     console.log("promise was rejected", error);
// })

//await 
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

//js12
// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=> {
//         console.log("data1 = ", data.fact);
//     })
//     .then((data2)=> {
//         console.log("data2 = ", data2.fact);
//     })
//     .catch((err)=>{
//         console.log("Error -", err)
//     });



//async and await 
//let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try{
//     let res = await fetch(url);
//     let data = await res.json;
//     console.log(res);
//     } catch(e) {
//         console.log("errro -", e);
//     }
//     console.log("bye");
   
// }

//using axios 
// async function getFacts() {
//     try{
//     let res = await axios.get(url);
//    //s let data = await res.json;
//     console.log(res);
//     } catch(e) {
//         console.log("errro -", e);
//     }
   
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     console.log("button was clicked");
// })

// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");
// btn.addEventListener("click",async() => {

// })
// async  function getImage(){
//     try{
//         let res = await axios.get(url2);
//         console.log(res.data.message);      
//     }catch(e) {
//         console.log("error-", e);
//         return"No fact found"
//     }
// }

let url3 = "https://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async() =>{
    console.log("button was clicked");
})
let country = "nepal";

async function getColleges() {
    try{
        let res = await axios.get(url + country);
        console.log(res);
    }catch(e) {
        console.log("error :" , e);
    }
}