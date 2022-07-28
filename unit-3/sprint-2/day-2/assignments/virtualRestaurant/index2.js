let form1 = document.getElementById("order-food");
form1.addEventListener("submit", Submit);

function Submit() {
    event.preventDefault();

    let orderId = document.getElementById("orderId");
    orderId.style = "visibility:visible";
    orderId.innerText = "Order Id: 1";
    


    let data = [];
    let biryani = document.getElementById("Biryani");
    let paneer = document.getElementById("Paneer");
    let dal = document.getElementById("Dal");
    let chhole = document.getElementById("Chhole");
    if(biryani.checked){
        let foodObj = {}; 
        let food = "biryani";
        src='https://www.forbesindia.com/media/images/2021/Dec/img_175063_whyisbiryanigettingbrandedalloverthecountry.jpg';
        foodObj.src = src;
        foodObj.name = food;
        data.push(foodObj);
    }
    if(paneer.checked){
        let foodObj = {}; 
        let food = "paneer";
        src='https://insanelygoodrecipes.com/wp-content/uploads/2021/08/Bowl-of-Achari-or-Malai-Paneer-500x500.jpg';
        foodObj.src = src;
        foodObj.name = food;
        data.push(foodObj);
    }
    if(dal.checked){
        let foodObj = {}; 
        let food = "dal";
        src='https://www.cookwithmanali.com/wp-content/uploads/2022/02/Gujarati-Dal.jpg';
        foodObj.src = src;
        foodObj.name = food;
        data.push(foodObj);
    }
    if(chhole.checked){
        let foodObj = {}; 
        let food = "chhole";
        src='https://www.kanpurkitchen.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-17-at-23.00.36.jpeg';
        foodObj.src = src;
        foodObj.name = food;
        data.push(foodObj);
    }
    console.log(data);

    data.forEach(function(elem, index){
        let divI = document.createElement("div");
        let divC = document.createElement("div");
        let divP= document.createElement("div");

        let img = document.createElement("img");
        img.src= elem.src;

        let p = document.createElement("p");
        p.innerText = elem.name;

        divI.append(img);
        divC.append(p);
        divP.append(divI,divC);

        document.body.append(divP);
        
    })

}