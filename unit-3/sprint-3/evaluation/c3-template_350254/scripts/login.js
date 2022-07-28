let users = JSON.parse(localStorage.getItem('users')) || [];

let submit = () => {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(email, password);


    if (users.length === 0) {
        alert("Please Create an Account First!");
        window.location.replace("../signup.html")
    }
    else {
        users.forEach(el => {
            if (email === el.email && password === el.password) {
                alert("Login Succesfully");
                let login = true;
                localStorage.setItem('login', JSON.stringify(login));
                window.location.replace("./index.html");
            }
            else {
                alert("Login Failed, Please try again");
            }
        });
    }

}