const robotWrapper=document.querySelector(".robot-wrapper");
window.addEventListener("mousemove",(e)=>{
    let x=(window.innerWidth/2-e.pageX)/40;
    let y=(window.innerHeight/2-e.pageY)/40;
    robotWrapper.style.transform = `translate(${x}px,${y}px)`
});
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll(){
    revealElements.forEach((element)=>{
    const revealTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(revealTop<windowHeight-100){
        element.classList.add("show");
    }
    });
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("show");
});