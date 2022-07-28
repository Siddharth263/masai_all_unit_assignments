document.querySelector("form").addEventListener("submit", saveData);
let details = [];

function saveData(){
    event.preventDefault();
    let data = {
        name: document.querySelector("#name").value,
        cat: document.querySelector("#category").value,
        imageUrl: document.querySelector("#image").value,
        gen: document.querySelector("#gender").value,
        sold: document.querySelector("#sold").value
    };
    details.push(data);
    localStorage.setItem("product", JSON.stringify(details));
    alert("Product added to page successfully!");
}