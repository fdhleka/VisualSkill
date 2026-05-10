const revealElements=
document.querySelectorAll(
".job-card,.timeline-item"
);

function revealOnScroll(){

revealElements.forEach((element)=>{

const revealTop=
element.getBoundingClientRect().top;

const windowHeight=
window.innerHeight;

if(revealTop<windowHeight-100){

element.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealElements.forEach((el)=>{
el.classList.add("reveal");
});

revealOnScroll();

const hamburger=
document.getElementById("hamburger");

const navMenu=
document.getElementById("navMenu");

hamburger.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

const faqItems=
document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

const question=
item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});