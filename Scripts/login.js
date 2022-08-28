document.querySelector("#check").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector(".container").classList.add("active")
    // document.querySelector("div").classList.remove("container")

})

document.querySelector("#remove").addEventListener("click",function(){
    document.querySelector(".container").classList.remove("active")
})


// sign up popup form work
let data=document.querySelector("#signupform")
let signuparr=JSON.parse(localStorage.getItem("signupdata"))||[]
data.addEventListener("submit",function(){
    event.preventDefault()
    let signupObj={
        name:data.name.value,
        email:data.email.value,
        password:data.password.value,
    }
  if(signupObj.name===""||signupObj.email===""||signupObj.password===""){
    alert("Fill All Field")
  }else{

    signuparr.push(signupObj)
    localStorage.setItem("signupdata",JSON.stringify(signuparr))
    window.location.href="index.html"

    // document.querySelector(".scontainer").classList.remove("sactive")
    //   document.querySelector(".container").classList.add("active")
    // document.querySelector("#remove").addEventListener("click",function(){
    //   document.querySelector(".container").classList.remove("active")
    // })
   
  }

  
})

// login form work
let lform=document.querySelector("#loginform")
let signuparrl=JSON.parse(localStorage.getItem("signupdata"))||[]
lform.addEventListener("submit",function(){
  event.preventDefault()
  let loginobj={
    email:lform.email.value,
    password:lform.password.value,
  }
  let iscorrect=false
signuparrl.forEach(function(ele){
  if(ele.email==loginobj.email&&ele.password==loginobj.password){
    iscorrect=true
  }
});
if(iscorrect==true){
    alert("Login Sucessfull")
  window.location.href="index.html"
  
  
}else{
    alert("User Not Found")
}

})


// Signup to login when click on login button at signup popup

document.querySelector("#stl").addEventListener("click",function(){
  event.preventDefault()
  document.querySelector(".container").classList.add("active")
  document.querySelector(".scontainer").classList.remove("sactive")
 
})

// login to signup popup
document.querySelector("#lts").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector(".container").classList.remove("active")
    document.querySelector(".scontainer").classList.add("sactive")
   
  })
  document.querySelector("#frev").addEventListener("click",function(){
    document.querySelector(".scontainer").classList.remove("sactive")
  })