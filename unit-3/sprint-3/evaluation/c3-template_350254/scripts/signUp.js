let users = JSON.parse(localStorage.getItem('users')) || [];

let submit = () => {
    let obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };

    users.push(obj);
    localStorage.setItem('users', JSON.stringify(users));

    let login = true;
    localStorage.setItem('login', JSON.stringify(login));

    alert("Signed up Successfully");
    window.location.replace("./index.html")
}