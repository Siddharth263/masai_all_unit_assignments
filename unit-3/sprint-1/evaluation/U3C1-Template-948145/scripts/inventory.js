let fetchData = JSON.parse(localStorage.getItem("data")) || [];

fetchData.forEach(function (elem, index) {
    //create div
    let divP = document.createElement("div");

    let divimg = document.createElement("div");
    let div = document.createElement("div");

    let img = document.createElement("img");
    let name = document.createElement("p");
    let brand = document.createElement("p");
    let price = document.createElement("p");

    //append values
    img.src = elem.image;
    name.innerText = elem.name;
    brand.innerText = elem.brand;
    price.innerText = elem.price;

    //remove button
    let button = document.createElement("button");
    button.innerText = "Remove Product";
    button.addEventListener("click", function () {
        reMove(index);
    });
    

    //reMove function
    function reMove(index) {
        event.target.remove.parentNode;
        fetchData.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(fetchData));
        window.location.reload();
    }

    //append divs
    divimg.append(img);
    div.append(name, brand, price);
    divP.append(divimg, div, button);
    document.querySelector("#products_data").append(divP);
})

let add = document.createElement("button");
add.innerText = "Add Product";
add.addEventListener("click", goToadd);
add.style.marginBottom = "10px"
add.style.padding = "10px"
add.style.borderRadius = "10px"
add.style.border = "none"
add.style.cursor = "pointer"
function goToadd() {
    window.location.replace("index.html");
}
document.querySelector("#menu").append(add);

let productsDiv = document.querySelector("#products_data")
productsDiv.style.display = "grid";
productsDiv.style.gridTemplateColumns = "repeat(3,1fr)";
productsDiv.style.gap = "40px 20px";
