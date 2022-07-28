let hotels = document.querySelector("#hotels_list");
hotels.style.display = "grid";
hotels.style.width = "500px";
hotels.style.height = "500px";
hotels.style.border = "1px solid black"

let login = document.querySelector("#login");
let chkLogin = JSON.parse(localStorage.getItem("login")) || false;
if(chkLogin){
    login.innerText = "Sign Out";
    login.href = "./login.html";
    login.addEventListener('click', changeLoginStatus);
}

function changeLoginStatus(){
    chkLogin = false;
    localStorage.setItem("login",JSON.stringify(chkLogin));
}

let main = async () => {

    let query = document.querySelector("#query").value;

    let data = await getData(query);
    append(data.hotels);
}

let getData = async (query) => {
    const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`

    let data = await fetch(url);
    let res = await data.json();
    return (res);
}

let append = (data) => {
    console.log(data);

    hotels.innerHtml = null;
    for (let i = 0; i < data.length; i++) {
        let divC = document.createElement('div');
        let name = document.createElement('h2');
        name.innerText = data[i].Title;

        let img = document.createElement('img');
        img.src = data[i].Images.two;

        let price = document.createElement("p");
        price.innerText = data[i].Price;

        let rating = document.createElement("p");
        rating.innerText = data[i].Rating;

        let rooms = document.createElement("p");
        rooms.innerText = data[i].Rooms;

        let ac = document.createElement('p');
        ac.innerText = data[i].Ac;

        let btn = document.createElement('button');
        btn.innerText = "Book Hotel"

        //set id's:
        btn.addEventListener("click", function(){
            bookHotel(data[i])
        })
        divC.setAttribute('id', 'hotel')
        divC.setAttribute('class', 'displayHotels')
        

        // appending the data:
        divC.append(img, name, price, rating, rooms,btn);
        hotels.append(divC);

    }
}

let bookHotel = (hotel) => {
    let arr = [];
    arr.push(hotel);
    localStorage.setItem('bookHotel',JSON.stringify(arr));
    if(chkLogin){
        window.location.replace("./checkout.html");
    }
    else{
        alert('Please Sign up or Login to your account, before booking the hotel');
    }

}