
let signUp = (event) => {
    event.preventDefault();
    let usrObj = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value,
    }

    if(usrObj.name === '' || usrObj.email === '' || usrObj.password === ''){
        alert("All feilds are required");
    }
    else{
        let usrData = []
        usrData.push(usrObj);
        localStorage.setItem('usrData', JSON.stringify(usrData));
        let login = true;
        localStorage.setItem('login', JSON.stringify(login));
        window.location.href = './index.html'
    }
}

document.querySelector("form").addEventListener("submit", function(){
    signUp(event);
})

