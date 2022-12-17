const registerBtn = document.getElementById("register-btn");

const formParent = document.getElementById("parent-form")

/*------------------
when register button clicked it show log in form
--------------------*/
// registerBtn.addEventListener("click", (eo) => {
//   formParent.style.display="block"
//   formParent.style.transform= "scale(1)"    
// });

/*----------------------
 when close icon clicked it hide log in form
------------------------*/
// const closeForm = document.getElementById("close-form");
// closeForm.addEventListener("click", (eo) => {

//   formParent.style.transform=" scale(0)"
//   // formParent.style.display="none"
// });

/*--------------------------
check input value if match regExp and
 add class succes or error AND icon valid
----------------------------*/

//for username input
const inputName = document.getElementById("username");
const allIcons = document.getElementsByClassName("icon-check")[0];
inputName.addEventListener("keyup", (eo) => {
  const userName = inputName.value;
  const reg = /[a-z]/;
  const paragraphError = document.getElementById("usermessage");

  if (reg.test(userName)) {
    inputName.classList.add("success");
    paragraphError.classList.remove("usermessage");
    inputName.classList.remove("error");
    allIcons.classList.add("icon-valid");
  } else {
    paragraphError.classList.add("usermessage");
    inputName.classList.remove("success");
    inputName.classList.add("error");
    allIcons.classList.remove("icon-valid");
  }
});


  /*--------------------
  enable register button if all input are valid 
  inputName inputEmail inputPass pswRepeat
  ----------------------*/
const active = () => {
  if (
    inputName.classList.contains("success") &&
    inputEmail.classList.contains("success") &&
    inputPass.classList.contains("success") &&
    pswRepeat.classList.contains("success")
  ) {
    const regBtn = document.getElementById("regbtn");
    regBtn.removeAttribute("disabled");
  }
  else{
    const regBtn = document.getElementById("regbtn");
    regBtn.setAttribute("disabled","")
  }
}


///for email input
const inputEmail = document.getElementById("email");
inputEmail.addEventListener("keyup", (eo) => {
  const userEmail = inputEmail.value;
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailMessage = document.getElementById("emailmessage");
  const allIcons = document.getElementsByClassName("icon-checkmark2")[1];

  if (regEmail.test(userEmail)) {
    inputEmail.classList.add("success");
    inputEmail.classList.remove("error");
    emailMessage.classList.remove("usermessage");
    allIcons.classList.add("icon-valid");
  } else {
    emailMessage.classList.add("usermessage");
    inputEmail.classList.add("error");
    inputEmail.classList.remove("success");
    allIcons.classList.remove("icon-valid");
  }
  
  //check if succes class is active
  active()
});

//for password input

///for email input
const inputPass = document.getElementById("psw");

inputPass.addEventListener("keyup", (eo) => {
  const userPass = inputPass.value;
  const regPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const pswMessage = document.getElementById("pswmessage");
  const allIcons = document.getElementsByClassName("icon-checkmark2")[2];

  //ADD
  if (regPass.test(userPass)) {
    inputPass.classList.add("success");
    inputPass.classList.remove("error");
    pswMessage.classList.remove("usermessage");
    allIcons.classList.add("icon-valid");
  } else {
    pswMessage.classList.add("usermessage");
    inputPass.classList.add("error");
    inputPass.classList.remove("success");
    allIcons.classList.remove("icon-valid");
  }

  //check if succes class is active
  active()
});

//for password repeat inputEmail inputPass pswRepeat

const pswRepeat = document.getElementById("pswrepeat");

pswRepeat.addEventListener("keyup", (eo) => {
  const password = document.getElementById("psw");
  const userPass = password.value;
  const repeat = pswRepeat.value;
  const repeatMessage = document.getElementById("repeatmessage");
  const allIcons = document.getElementsByClassName("icon-checkmark2")[3];

  if (repeat === userPass) {
    pswRepeat.classList.add("success");
    pswRepeat.classList.remove("error");

    repeatMessage.classList.remove("usermessage");
    allIcons.classList.add("icon-valid");
  } else {
    repeatMessage.classList.add("usermessage");
    allIcons.classList.remove("icon-valid");
    pswRepeat.classList.add("error");
    pswRepeat.classList.remove("success");
  }

  //check if succes class is active
  active()
//if all input include success class remove cursor not allowed

});
