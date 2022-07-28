let student = JSON.parse(localStorage.getItem("student")) || [];
form = document.querySelector("form");
form.addEventListener("submit",chkEmail);

function chkEmail(){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let flag = false;
    if(student.length == 0){
        window.location.replace("./signup.html");
    } else{
        student.forEach((el)=>{
            email === el.email ? window.location.replace(("go to login page")) : window.location.replace("go to signup page");
        })
    }    
}