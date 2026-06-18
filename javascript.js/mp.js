let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let deltbtn = document.createElement("button");
    deltbtn.innerText = "delete";
    deltbtn.classList.add("delete");

    item.appendChild(deltbtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
})
ul.addElementListener("click", function () {
    console.log("button clicked");
});
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function () {
      
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}      //this for that item ony that exists before 

let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

document.addEventListener("Keypress", function(){
    if(started == false){
    console.log("game started");
    started = true;

    levelUp();
    }
});

function levelUp(){
    level++;
}