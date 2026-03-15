function nextPage(page){

document.querySelectorAll(".page").forEach(p => {p.classList.remove("active"); });

document.getElementById("page"+page).classList.add("active");

if(page===5){

startCountdown();

}

if(page===6){

startConfetti();

}

}



function submitSuggestion(){

let audience=document.getElementById("audienceName").value;

let babyname=document.getElementById("babyName").value;

if(audience==="" || babyname===""){

alert("Please enter both fields");

return;

}

fetch("https://script.google.com/macros/s/AKfycbzr9wjIoF_8nGg8XjsmxXf2FTG0Q62nA3rzcNFgSTX5gfisE1V3cLG3CkN_FUWk7_h4/exec",{

method:"POST",

body:JSON.stringify({

audience:audience,

babyname:babyname

})

})

.then(res=>res.json())

.then(data=>{

alert("Thanks for your suggestion!");

document.getElementById("audienceName").value="";

document.getElementById("babyName").value="";

});

}



function startCountdown(){

let count=3;

let el=document.getElementById("count");

let timer=setInterval(()=>{

count--;

el.innerText=count;

if(count===0){

clearInterval(timer);

nextPage(6);

}

},1000);

}



function startConfetti(){

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let pieces=[];

for(let i=0;i<200;i++){

pieces.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*6+4

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="pink";

pieces.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.y+=2;

if(p.y>canvas.height){

p.y=0;

}

});

requestAnimationFrame(draw);

}

draw();

}
