// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from '../components/navbar.js'

let navbarDiv = document.getElementById('navbarDiv')
navbarDiv.innerHTML = navbar();

// https://masai-api.herokuapp.com/news?q={query}



let append = (data) => {
    let container = document.querySelector('#results');
    data.forEach(article =>{
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


let mainSearch = async () => {
    let data = await getData();
    append(data.articles);
}

let getData = async () => {
    let query = JSON.parse(localStorage.getItem('query'));
    console.log(query);

    let url = `https://masai-api.herokuapp.com/news?q=${query}`;

    let response = await fetch(url);

    return response.json();

}

mainSearch();

export default mainSearch;