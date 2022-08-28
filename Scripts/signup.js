

document.querySelector("form").addEventListener("submit", signUpFun);
var userData = JSON.parse(localStorage.getItem("userdetails")) || []
function signUpFun() {
  event.preventDefault();
 var userObj = {
   email: document.querySelector("#name").value,
   password: document.querySelector("#pass").value,
   name:document.querySelector("#aname").value,
  };
userData.push(userObj);
  localStorage.setItem("userdetails", JSON.stringify(userData))
window.location.href = "login.html";
}