const loginForm=document.getElementById("loginForm");
const errorMessage=document.getElementById("errorMessage");

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(email.length<5||!email.includes("@")){
errorMessage.innerText="Email must be valid";
return;
}

if(password.length<8){
errorMessage.innerText="Password minimum 8 characters";
return;
}

errorMessage.innerText="";

alert("Login Success!");

});