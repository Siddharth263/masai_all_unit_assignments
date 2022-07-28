let student = JSON.parse(localstorage.getItem('student')) || [];

form = document.querySelector("form");
form.addEventListener("submit",chkData);

function chkData() {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;
}

