let form = document.querySelector("form");

let details = [];

function Products(name, category, image, sold) {
    this.name = name;
    this.category = category;
    this.image = image;
    this.sold = sold;
}

let saveData = () => {
    event.preventDefault();

    let name = form.name.value;
    let category = form.category.value;
    let image = form.image.value;
    let sold = form.sold.value;
    let p = new Products(name, category, image, sold);
    console.log(p);
    details.push(p);
    localStorage.setItem("product", JSON.stringify(details));
    alert("Product added to page successfully!");
}

form.addEventListener("submit", function () {
    saveData();
});
