const registerForm=document.getElementById("registerForm");
const errorMessage=document.getElementById("errorMessage");

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const fullName=document.getElementById("fullname").value;
const email=document.getElementById("email").value;
const username=document.getElementById("username").value;
const dob=document.getElementById("dob").value;
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirmPassword").value;
const terms=document.getElementById("terms").checked;

if(fullName.length<3){
    errorMessage.innerText="Full name minimum 3 characters";
    return;
}

if(email.length<5||!email.includes("@")){
    errorMessage.innerText="Email must be valid";
    return;
}

if(username.length<3){
    errorMessage.innerText="Username minimum 3 characters";
    return;
}

if(dob===""){
    errorMessage.innerText="Date of birth must be filled";
    return;
}

if(password.length<8){
    errorMessage.innerText="Password minimum 8 characters";
    return;
}

if(password!==confirmPassword){
    errorMessage.innerText="Password does not match";
    return;
}

if(!terms){
    errorMessage.innerText="You must accept terms";
    return;
}
    errorMessage.innerText="";
    alert("Register Success!");
});

const genderButtons = document.querySelectorAll(".gender-btn");
genderButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
    genderButtons.forEach((btn)=>{
    btn.classList.remove("active");
});
    button.classList.add("active");

});

});