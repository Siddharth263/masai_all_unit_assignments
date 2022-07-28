let loginForm = document.getElementById('loginForm');
let signupForm = document.getElementById('signupForm');

// variables to store the data:
let login_data = JSON.parse(localStorage.getItem('login_data')) || [];
let signup_data = JSON.parse(localStorage.getItem('signup_data')) || [];

// declaration of function to collect the data from the page/user:
let login = async () => {
    event.preventDefault();
    let usrObj = {
        email: document.getElementById('login_username').value,
        password: document.getElementById('login_password').value,
    };

    login_data.push(usrObj);
    let loginLink = 'https://masai-api-mocker.herokuapp.com/auth/login'
    localStorage.setItem('login_data', JSON.stringify(login_data));
    login_data = JSON.stringify(login_data);

    let response = await fetch(loginLink, {
        method: 'POST',
        body: login_data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json();
    console.log(data);
}

let signup = async () => {
    event.preventDefault();
    let usrObj = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        mobile: document.getElementById('mobile').value,
        description: document.getElementById('description').value
    }

    let url = 'https://masai-api-mocker.herokuapp.com/auth/register';
    signup_data.push(usrObj);
    localStorage.setItem('signup_data', JSON.stringify(signup_data));
    signup_data = JSON.stringify(signup_data)

    let response = await fetch(url, {
        method: 'POST',
        body: signup_data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json();
    console.log(data);
}

// accessing the function:
loginForm.addEventListener('submit', login);
signupForm.addEventListener('submit', signup);