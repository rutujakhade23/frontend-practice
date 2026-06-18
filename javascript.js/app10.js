// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick = function(){
//     console.log("button was clicked");
// }

//for number of buttons onclick 
// let btns = document.querySelectorAll("Button");

// for(btns of btns){
//     btns.onclick = sayHello;
//     console.log("btn");
// }
// function sayHello(){
//     alert("Hello");
// }

///oonouseentered
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onmouseenter = function() {
//         console.log("you entered a button");
//     };
//     console.log(btn);
// }
// function sayHello(){
//     alert("Hello!");
// }

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dbclick", function() {
//         console.log("youdouble clicked me");
//     })
// }
// function sayHello(){
//     alert("Heloo!");
// }
// function sayName(){
//     alert("Apna college");
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     //console.log("generate random color");
//     let h3 = document.querySelector("h3");
//     let randomColor = getrandomColor();
//     h3.innerText = randomColor;


//     let div = document.querySelector("div");
//     div.style.background = randomColor;
//     console.log("color updated");
// });

// function getrandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("para was clicked");
})