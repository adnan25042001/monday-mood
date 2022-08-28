
var userData = JSON.parse(localStorage.getItem("userdetails")) || []

function login(){
  
    event.preventDefault();

   let datauser = false
    let obj = {
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }
    console.log(obj)
    userData.forEach(el => {
        if(el.email==obj.email && el.password==obj.password){
            datauser  = true
           
        }


        

    });

    if(datauser==true){
           alert("login Sucessfull")
           window.location.href="index.html"
    }else{
        alert("user does not match")
    }
}

