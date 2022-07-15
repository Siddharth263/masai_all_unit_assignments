let chkUsr = () => {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let passowrd = document.querySelector("#password").value;
    let usrData = JSON.parse(localStorage.getItem('usrData'));
    usrData.forEach((el) => {
        if(email === el.email && passowrd === el.password){
            alert("Succesfully Logged In");
            let login = true;
            localStorage.setItem('login', JSON.stringify(login));
            window.location.href='./index.html';
        }
    })
}

document.querySelector("form").addEventListener("submit", function(){
    chkUsr();
})


