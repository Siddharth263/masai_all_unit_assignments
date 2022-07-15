import navbar from '../components/navbar.js';

import { getData } from '../components/fetch.js';

document.getElementById('navbar').innerHTML = navbar();
document.querySelector("#home").addEventListener("click", function(){
    window.location.href = "./index.html";
})
document.querySelector("#rr").addEventListener("click", function(){
    window.location.href = "./randomRecipes.html";
})

let main = () => {

    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

    getData(url);
}

main();