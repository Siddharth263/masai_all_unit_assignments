// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit", myFunction);
function myFunction(event) {
    event.preventDefault();
    let image = document.querySelector("#image").value;
    let name = document.querySelector("#name").value;
    let batch = document.querySelector("#batch").value;
    let dsa = document.querySelector("#dsa").value;
    dsa = Number(dsa);
    let csbt = document.querySelector("#cs").value;
    csbt = Number(csbt);
    let web = document.querySelector("#coding").value;
    web = Number(web);
    let per = (dsa + csbt + web) * 100 / 30;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src",image);
    td1.append(img);


    let td2 = document.createElement("td");
    td2.innerText = name;
    let td3 = document.createElement("td");
    td3.innerText = batch;
    let td4 = document.createElement("td");
    td4.innerText = dsa;
    let td5 = document.createElement("td");
    td5.innerText = csbt;
    let td6 = document.createElement("td");
    td6.innerText = web;
    let td7 = document.createElement("td");
    td7.innerText = per.toFixed(3);
    let td8 = document.createElement("td");

    if (per < 50) {
        td8.innerText = "ASYNC";
        td8.style.backgroundColor = "red";
        td8.style.color = "white";
    }
    else {
        td8.innerText = "REGULAR";
        td8.style.backgroundColor = "green";
        td8.style.color = "white";
    }


    let td9 = document.createElement("td");
    td9.innerText = "DELETE"
    td9.style.backgroundColor = "red";
    td9.style.color = "white";
    td9.addEventListener("click", remove);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    document.querySelector("tbody").append(tr);
}

function remove(event) {
    event.target.parentNode.remove();
}