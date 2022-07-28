let hotel = JSON.parse(localStorage.getItem('bookHotel'));
let user = JSON.parse(localStorage.getItem('user'));
console.log(hotel);

let displayHotel = document.querySelector("#hotel_details");


let divP = document.createElement('div');
for(let i = 0;i<hotel.length;i++) {

    let price = document.createElement('p');
    price.innerText = hotel[i].Price

    let rating = document.createElement('p');
    rating.innerText = hotel[i].Rating

    let rooms = document.createElement('p');
    rooms.innerText = hotel[i].Rooms

    let title = document.createElement('p');
    title.innerText = hotel[i].Title

    let img = document.createElement('p');
    img.src = hotel[i].Images.one;

    let ac = document.createElement('p');
    if(hotel[i].ac){
        ac.innerText = "Yes"
    }else{
        ac.innerText = "No" 
    }
    divP.append(img,title,price,rating,rooms,ac);
}
displayHotel.append(divP);

let book = () => {
    let name = document.querySelector("#user_name").value;
    let num = document.querySelector("#user_number").value;
    let chkIn = document.querySelector("#check_in").value;
    let chkOut = document.querySelector("#check_out").value;

    if(name == "" || num == "" ||chkIn == "" || chkOut == ""){
        alert("All details are mandatory");
    }
    else{
        alert("Confirming your booking with us. Please wait for 5 Seconds")
        setTimeout(() => {
            alert(`${name}, Your booking is successful!`);
            window.location.replace("./index.html")
        }, 5000)
    }
}