document.querySelector("form").addEventListener("submit", loginData);
let form = document.getElementById("login-form");

let user = JSON.parse(localStorage.getItem("users")) || [] ;
function loginData() {
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;

    if(email === "" || password === "") {
        alert("The email and password must be provided");
    }
    else{
        user.push(email, password);
        localStorage.setItem("users", JSON.stringify(user));
    }
}

let home = document.getElementById("home")
home.addEventListener("click",chkUser);

function chkUser() {
    if (user.length === 0) alert("Please login to your account to continue!!");
    else window.location.replace("./index.html");
}