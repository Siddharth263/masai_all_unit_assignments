//store the products array in localstorage as "data"
document.querySelector("form").addEventListener("submit",enterData);
let products= JSON.parse(localStorage.getItem("products")) || [];
function enterData() {
    event.preventDefault();
    let details={
        name :document.querySelector("#product_name").value,
        brand : document.querySelector("#product_brand").value,
        price : document.querySelector("#product_price").value,
        image : document.querySelector("#product_image").value
    }
    products.push(details);
    localStorage.setItem("data", JSON.stringify(products));    
}