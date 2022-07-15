let fetchData = JSON.parse(localStorage.getItem("product")) || [];
let count = document.querySelector("#counter");
count.style.fontFamily = "sans-serif";
let h1 = document.createElement("h1");
h1.innerText = `Total products listed are: ${fetchData.length}`;
count.append(h1)

fetchData.forEach(function (elem, index) {
    //assigning data for all divs
    let divP = document.createElement("div");
    let imgDiv = document.createElement("div");
    let detailsDiv = document.createElement("div");
    let catDiv = document.createElement("div");

    let buttonDiv = document.createElement("div");
    buttonDiv.style.display = "grid";
    buttonDiv.style.gridTemplateColumns = "repeat(2,1fr)";
    buttonDiv.style.gap = "20px";
    buttonDiv.style.justifyContent = "space-around";
    buttonDiv.style.marginTop = "10px";

    let img = document.createElement("img");
    img.src = elem.imageUrl;
    // img.style.width = "100%";

    let name = document.createElement("p");
    name.innerText = elem.name;
    name.style.fontSize = "20px";

    let cat = document.createElement("p");
    cat.innerText = elem.cat;
    cat.style.fontSize = "15px";

    let gen = document.createElement("p");
    gen.innerText = elem.gen;
    gen.style.fontSize = "15px";

    let soldButton = document.createElement("button");
    soldButton.innerText = "Sold";
    soldButton.style.border = "none";
    soldButton.style.padding = "15px 15px";
    soldButton.disabled = "false";
    soldButton.style.color = "white";
    soldButton.style.borderRadius = "5px";

    if (elem.sold === "false") {
        soldButton.style.backgroundColor = "green";
    } else {
        soldButton.style.backgroundColor = "red";
    }

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove"
    removeButton.style.border = "none";
    removeButton.style.padding = "15px 15px";
    removeButton.style.borderRadius = "5px";
    removeButton.style.color = "white";
    removeButton.style.cursor = "pointer";
    removeButton.style.backgroundColor = "gray";

    buttonDiv.append(soldButton, removeButton);

    //appending the data into the div and body

    imgDiv.append(img);
    catDiv.append(cat, gen);
    detailsDiv.append(name, catDiv, buttonDiv);
    divP.append(imgDiv, detailsDiv);
    document.querySelector(".products").append(divP);


    //styling the divs

    divP.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    divP.style.padding = "25px 20px";
    divP.style.borderRadius = "10px";

    //finctionality for remove button

    removeButton.addEventListener("click", function(index){
        removeMe(index);
    })

    function removeMe(index){
        fetchData.splice(index, 1);
        localStorage.setItem("product", JSON.stringify(fetchData));
        window.location.reload();
    }
})