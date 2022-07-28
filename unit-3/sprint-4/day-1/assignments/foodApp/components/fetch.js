import Recipe from './class.js';
let getData = async (url) => { 
    let res = await fetch(url);
    let data = await res.json();
    let cont = document.getElementById('recipes');
    append(data.meals,cont);
}



let append = (data,cont) => {
    let tbody = document.querySelector("tbody");
    let meal = new Recipe(data);
    console.log("meal:", meal);

    let name = document.createElement('p');
    name.innerText = meal.name;

    cont.append(name);

    let ingredients = [];
    let measure = [];

    
    meal.ingredients.forEach((el) => {
        ingredients.push(el);
    })
    meal.measure.forEach((el) => {
        measure.push(el);
    })

    console.log(ingredients, measure);
    for(let i = 0; i < ingredients.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement("td");
        td.innerText = ingredients[i];

        let td2 = document.createElement("td");
        td2.innerText = measure[i];
        tr.append(td,td2)
        tbody.append(tr);
    }
        
}

export {getData};