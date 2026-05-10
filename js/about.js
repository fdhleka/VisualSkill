const hamburger=document.getElementById("hamburger");
const navMenu=document.getElementById("navMenu");

hamburger.addEventListener("click",()=>{
navMenu.classList.toggle("show");
});

/* COUNTER */

const counters=document.querySelectorAll(".counter");

counters.forEach((counter)=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");
const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=
`${Math.ceil(current+increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText=
target.toLocaleString()+"+";

}

};

updateCounter();

});

/* REVEAL */

const revealElements=
document.querySelectorAll(
".hero-text,.hero-image,.story-left,.about-card,.impact-card,.value-card"
);

function revealOnScroll(){

revealElements.forEach((element,index)=>{

const revealTop=
element.getBoundingClientRect().top;

const windowHeight=
window.innerHeight;

if(revealTop<windowHeight-100){

element.classList.add("show");

if(index%2===0){

element.classList.add("left");

}else{

element.classList.add("right");

}

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();