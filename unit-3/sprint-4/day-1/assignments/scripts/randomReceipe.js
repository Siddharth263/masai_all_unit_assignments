import navbar from '../foodApp/components/navbar.js';
import { getData } from '../foodApp/components/fetch.js';

document.getElementById('navbar').innerHTML = navbar();
document.querySelector("#rof").addEventListener("click", function(){
    window.location.href = "./recipeOfTheDay.html";
})
document.querySelector("#home").addEventListener("click", function(){
    window.location.href = "./index.html";
})

// url - https://www.themealdb.com/api/json/v1/1/random.php

let main = () => {

    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

    getData(url);
}

main();