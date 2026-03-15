function nextPage(page){

document.querySelectorAll(".page").forEach(p => {p.classList.remove("active"); });

document.getElementById("page"+page).classList.add("active");

if(page===5){

startCountdown();

}

}

function submitSuggestion(){

let audience = document.getElementById("audienceName").value;
let babyname = document.getElementById("babyName").value;

if(audience === "" || babyname === ""){
  alert("Please enter both fields");
  return;
}

let data = new URLSearchParams();
data.append("audience", audience);
data.append("babyname", babyname);

fetch("https://script.google.com/macros/s/AKfycbzr9wjIoF_8nGg8XjsmxXf2FTG0Q62nA3rzcNFgSTX5gfisE1V3cLG3CkN_FUWk7_h4/exec",{
  method: "POST",
  body: data
});

alert("Thanks for your suggestion!");

document.getElementById("audienceName").value="";
document.getElementById("babyName").value="";

nextPage(5);

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

