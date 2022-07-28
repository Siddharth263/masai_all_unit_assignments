document.querySelector("form").addEventListener("submit", Submit);
let form = document.getElementById("signup-form");

let user = JSON.parse(localStorage.getItem("user")) || [];

function Submit() {
    event.preventDefault();
    let name = form.name.value;
    let contact = form.contact.value;
    let email = form.email.value;
    let password = form.password.value;

    if(name === "" || contact === "" || email === "" || password === ""){
        alert("The details must be provided");
    }
    else{
        user.push(name, contact, email, password);
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user))
    }

}

let home = document.getElementById("home")
home.addEventListener("click",chkUser);

function chkUser() {
    if (user.length === 0) alert("Please sign-up to continue!!");
    else window.location.replace("./index.html");
}

