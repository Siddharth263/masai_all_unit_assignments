let delay = 2000;
import navbar from '../components/navbar.js';
import { getData } from '../components/fetch.js';

document.getElementById('navbar').innerHTML = navbar();
document.querySelector("#rof").addEventListener("click", function(){
    window.location.href = "./recipeOfTheDay.html";
})

document.querySelector("#rr").addEventListener("click", function(){
    window.location.href = "./randomRecipes.html";
})

document.querySelector("#home").addEventListener("click", function(){
    window.location.href = "./index.html";
})

document.querySelector("#signup").addEventListener("click", function(){
    window.location.href = "./signup.html";
})

document.querySelector("#login").addEventListener("click", function(){
    window.location.href = "./login.html";
})

document.querySelector('#meal').addEventListener('input', function(){
    debounce(main,delay);
});
let id
function debounce(fn, delay) {
    clearTimeout(id);
    id = setTimeout(fn, delay);
}


let main = () => {
    let query = document.querySelector('#meal').value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    getData(url);
}

//chk user login.signup if done or not?

let usrData = JSON.parse(localStorage.getItem("usrData")) || [];

let login = JSON.parse(localStorage.getItem("login"));

if(login===true){
    document.querySelector("#signup").innerText = `${usrData[0].name}`;
    document.querySelector("#signup").addEventListener("click", function(){
        window.location.href = "./index.html";
    })
    document.querySelector("#login").innerText = "Logout";

    document.querySelector("#login").addEventListener("click", function(){
        window.location.href = "./index.html";
        document.querySelector("#login").innerText = "Login";
        login = false;
        localStorage.setItem("login", JSON.stringify(login));
    })
}