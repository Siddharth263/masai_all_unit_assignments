const apiKey = "c6a8c372";

let movie = document.querySelector("#movie");

movie.addEventListener("input", function(e) {
    debounce(main, 500);
});

let id;

function debounce(fn, delay) {
    if(id) clearTimeout(id);
    id = setTimeout(() => {
        fn();
    }, delay);;
}

async function main() {
    let name = document.getElementById("movie").value;
    let movies = await data(name); 
    append(movies);
}


async function data(name){
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=c6a8c372&s=${name}`;
    let rawData = await fetch(url);

    let res = await rawData.json();
    return res.Search;
}

function append(movies){
    let div = document.querySelector("#display");
    div.innerHTML = null;

    if(!movies) return;

    
    movies.forEach(function(elem){
        let divC = document.createElement("div");
        divC.addEventListener('click', function(){
            details(elem);
        });

        let img = document.createElement("img");
        img.src = elem.Poster;

        let name = document.createElement("p");
        name.innerText = elem.Title;

        let year = document.createElement("p");
        year.innerText = elem.Year;

        // styling:
        divC.setAttribute('class', 'movie');
        divC.style.cursor = 'pointer';

        // appending the data:
        divC.append(img,name,year);
        div.append(divC);
    })

}

function details(el){
    console.log(el);
    let div = document.querySelector("#details");
    div.innerHTML = null;

    let img = document.createElement("img");
    img.src = el.Poster;

    let name = document.createElement("p");
    name.innerText = `${el.Title}`;

    let year = document.createElement("p");
    year.innerText = `${el.Year}`;

    div.append(img,name,year);
}