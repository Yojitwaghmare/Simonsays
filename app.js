let sequence =[];
let user=[];
let start=false;
let level=0;
let h2=document.querySelector("h2");
let colour=["yellow","red","green","blue"];

document.addEventListener("keypress", function () {
    if(start==false){
    // console.log("key press");
    start=true;
    levelup();
    }
    
});

function levelup(){
    user=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomnum=Math.floor(Math.random() * 3);
    let randomcolor=colour[randomnum];
    let box=document.querySelector(`.${randomcolor}`);
    sequence.push(randomcolor);
    // console.log(randomnum);console.log(randomcolor);console.log(box);
    btnsplash(box);
}

function btnsplash(box){
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash");
    },250);
}

function checksequence(i){

    if (sequence[i]===user[i]) {
        if (user.length==sequence.length) {
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over <b>Youre Score is ${level}</b><br>! Press any key to start`
        reset();
    }
}

function boxpress(){
    let box=this;
    btnsplash(box);
    let userbox=box.getAttribute("id")
    user.push(userbox)
    checksequence(user.length-1);
}

let boxs=document.querySelectorAll(".box");
for(box of boxs){
    box.addEventListener("click",boxpress);
}

function reset(){
sequence =[];
user=[];
start=false;
level=0;
}
