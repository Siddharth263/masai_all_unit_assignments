// Use Import export (MANDATORY)

import navbar from '../components/navbar.js'

let navbarDiv = document.getElementById('navbarDiv')
navbarDiv.innerHTML = navbar();

let mainNews = () => {
    let news = JSON.parse(localStorage.getItem("news"));
    
    let arr = []; 
    arr.push(news);
    let div = document.querySelector("#detailed_news")
    div.innerHTML = null;
    
    console.log(news);
    
    arr.forEach(el => {
        let title = document.createElement('h3');
        title.innerText = el.title;
    
        let author = document.createElement('p');
        author.innerText = el.author;
    
        let content = document.createElement('p');
        content.innerText = el.content;
    
        let description = document.createElement('p');
        description.innerText = el.description;
    
        let source = document.createElement('p');
        source.innerText = el.source.name;
    
        let img = document.createElement('img');
        img.src = el.urlToImage
        div.append(img, title, content, description, source)
    
    
    })
}

mainNews();

export default mainNews;
