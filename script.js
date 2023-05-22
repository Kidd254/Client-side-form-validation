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

//Data Preservation
let dataForm = {
    name: "",
    email: "",
    message: "",
}

//dataForm=JSON.parse(localStorage.getItem('info'));
const userName= document.getElementById('name')
const userMail= document.getElementById('email')
const userMessage= document.getElementById('text')

userName.addEventListener('input', ()=> {
dataForm.name= userName.value;
localStorage.setItem('name', JSON.stringify(dataForm))
});

userMail.addEventListener('input', ()=>{
dataForm.email= userMail.value;
localStorage.setItem('email', JSON.stringify(dataForm));
});

userMessage.addEventListener('input', ()=>{
dataForm.message= userMessage.value;
localStorage.setItem('message', JSON.stringify(dataForm));
});

if (localStorage.getItem('info') !== null) {
  console.log('Data has been stored locally.');
} else {
  console.log('Data has not been stored locally.');
}

//retrieval
if(localStorage.getItem('info')){
    let objectForm = localStorage.getItem('info');
    objectForm= JSON.parse(objectForm);
 document.getElementById('name').value= objectForm.name;
  document.getElementById('email').value= objectForm.email 
   document.getElementById('text').value=objectForm.message;

}


if (localStorage.getItem('info') !== null) {
  console.log('Data has been stored locally.');
} else {
  console.log('Data has not been stored locally.');
}
