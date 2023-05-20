const email = document.getElementById('email');
const emailError = document.querySelector(".error");
const sendData= document.getElementById('submit')
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formField = document.getElementById('input-field')

email.addEventListener("input", (event)=>{
   if(email.validity.valid){
    emailError.textContent="";
    emailError.className = "error";
   } 
    else{
    showError();
   }
});

sendData.addEventListener("submit", (event)=>{
    if(!email.validity.valid){
        showError();
        event.preventDefault();
    }

});

function showError() {
    if(email.validity.valueMissing){
        emailError.textContent="Incorrect email adress!";
    } else if(email.validity.typeMismatch){
        emailError.textContent= "Kindly add a valid email address"
    } else if(!validateEmail(emailInput)){
    emailError.textContent= "invalid email address";
   }
    emailError.className= "error active";
}

function validateEmail(emailInput){
    if(emailInput.value.match(mailFormat)){
        emailError.textContent= "";
    }
}

window.onload = function(){
    if(localStorage) {
        formField('submit', function(){
const fullName = document.getElementById('name').value;
localStorage.setItem('name', name);
        });
    }
}
