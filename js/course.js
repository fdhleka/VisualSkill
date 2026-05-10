const hamburger=document.getElementById("hamburger");
const navMenu=document.getElementById("navMenu");

hamburger.addEventListener("click",()=>{
navMenu.classList.toggle("show");
});

const teacherCards=document.querySelectorAll(".teacher-card");

teacherCards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

teacherCards.forEach((item)=>{
item.classList.remove("active");
});

card.classList.add("active");

});

});