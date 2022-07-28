// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from '../components/navbar.js'
import mainSearch from '../scripts/search.js';
import mainNews from '../scripts/news.js';

let navbarDiv = document.getElementById('navbarDiv')
navbarDiv.innerHTML = (navbar());

let search = document.querySelector("#search");
search.addEventListener('click', function() {
    let query = document.querySelector("#search_input").value;
    localStorage.setItem('query', JSON.stringify(query));
    window.location.href = './search.html';
});


let getData = async () => {
    const url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`

    let res = await fetch(url);
    return res.json();
}

let append = (data) => {
    console.log(data);
    let container = document.querySelector("#news");
    
    data.forEach((article) => {
        let title = document.createElement('h3');
        title.innerText = article.title;

        let author = document.createElement('p');
        author.innerText = article.author;

        let content = document.createElement('p');
        content.innerText = article.content;

        let description = document.createElement('p');
        description.innerText = article.description;

        let source = document.createElement('p');
        source.innerText = article.source.name;

        let img = document.createElement('img');
        img.src = article.urlToImage
        
        // appending the data
        let divP = document.createElement('div');
        container.setAttribute('class', 'news')
        
        let divData = document.createElement('div')
        divData.append(img, title, source)
        divP.append(divData);
        
        container.append(divP);

        // storing the data in local Storage:
        divP.addEventListener('click', function () {
            let news = article;
            localStorage.setItem('news', JSON.stringify(news));
            window.location.href = './news.html';
        })
    })

}

let main = async () => {
    let data = await getData();
    append(data.articles);
}



main();