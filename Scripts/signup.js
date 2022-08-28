
  document.querySelector("form").addEventListener("submit", loginFunction);
  var regdUsers = JSON.parse(localStorage.getItem("userdetails"));
  function loginFunction() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#login-mail").value;
    // var enteredpass = document.querySelector("#pass").value;
    for (var i = 0; i < regdUsers.length; i++) {
      // console.log(regdUsers[i]);
      if (
        regdUsers[i].email == enteredEmail || regdUsers[i].pass == enteredpass
      ) {
        alert("Login Success");
        window.location.href = "index.html";
        break;
      }
      else {
        alert("Login Failed");
       
      }
    }
  }

  



      


 