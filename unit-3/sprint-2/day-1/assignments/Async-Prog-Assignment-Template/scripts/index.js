document.querySelector("#movies").style.display = "grid";
document.querySelector("#movies").style.gap = "40px 20px";
document.querySelector("#movies").style.gridTemplateColumns = "repeat(3,0.5fr)";
document.querySelector("#movies").style.justifyContent = "space-evenly";

let home = document.getElementById("home")
home.addEventListener("click", chkUser);

let user = JSON.parse(localStorage.getItem("user")) || [];

function chkUser() {
    if (user.length === 0) alert("Please login or sign-up to continue!!");
    else window.location.replace("./index.html");
}

//animation movies
let images =
    [
        "https://wallpaperaccess.com/full/225895.jpg",
        "https://www.gamespot.com/a/uploads/screen_kubrick/1578/15789737/3515433-endgamedek.jpg",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/doctor-strange-multiverse-of-m_1200x768.jpeg?YDKJbvufDCOvrdJyvnVzY_qp8.LJVlc0&size=1200:675",
        "https://m.media-amazon.com/images/I/81J6CaUe+GL._AC_SL1200_.jpg",
        "https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2022/05/Obi-Wan-Kenobi-Disney-Plus-Keyart-Header.jpg?fit=1932%2C1092&ssl=1"
    ]
let i = 0;
let img = document.createElement("img");
let box = document.getElementById("slideshow");

setInterval(function () {
    if (i > images.length - 1) i = 0;
    img.src = images[i];
    box.append(img);
    i++;
    img.innerHTML = "";
}, 1000)


//list of movies being displayed
let listOfMovies =
    [
        {
            src: "https://upload.wikimedia.org/wikipedia/en/d/d4/The_Kashmir_Files_poster.jpg",
            movie: "The Kashmir Files",
            rating: 4
        },
        {
            src: "https://www.pinkvilla.com/imageresize/_rrr_postponed.jpg?width=752&format=webp&t=pvorg",
            movie: "RRR",
            rating: 4.5
        },
        {
            src: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
            movie: "KGF Chapter 2",
            rating: 4.8
        },
        {
            src: "https://m.media-amazon.com/images/M/MV5BYzhjMzhlNjgtMDgwMy00Y2ZlLWEwMjktNjU4NjYyZTkzNmFlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            movie: "Jersey",
            rating: 4.9
        },
        {
            src: "https://m.media-amazon.com/images/M/MV5BOWE5ZjljZDEtYTZmNy00MGVlLWJjNjEtMWUwMzUyMDc5NTA3XkEyXkFqcGdeQXVyODgzMDMwODI@._V1_.jpg",
            movie: "Bachchhan Pandey",
            rating: 2
        },
        {
            src: "https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
            movie: "Gangubai Kathiawadi",
            rating: 3
        },
    ]

//creating the divs to display the list of movies
displayMovies(listOfMovies)
function displayMovies(listOfMovies) {
    // window.location.reload();
    for (let i = 0; i < listOfMovies.length; i++) {
        let img1 = document.createElement("img");
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        let divI = document.createElement("div");
        let divC = document.createElement("div");
        let divP = document.createElement("div");
    
        img1.src = listOfMovies[i].src;
        img1.style.width = "100%";
    
        p.innerText = listOfMovies[i].movie;
    
        p2.innerText = listOfMovies[i].rating;
    
        divI.append(img1);
        divC.append(p, p2);
        divC.style.display = "grid";
        divC.style.gridTemplateRows = "0.5fr";
        divC.style.justifyContent = "center";
        divC.style.alignContent = "center";
    
        divP.append(divI, divC);
        divP.style.width = "50%";
        divP.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px";
    
        document.querySelector("#movies").append(divP);
    }
}

let lthButton = document.getElementById("lTh");
let htlButton = document.getElementById("hTl");

lthButton.addEventListener("click", function () {
    lowToHigh(listOfMovies);
});

htlButton.addEventListener("click", function () {
    highToLow(listOfMovies);
})

function lowToHigh(arr) {
    let rating = [];
    for (let i = 0; i < arr.length; i++) {
        rating.push(arr[i].rating);
    }
    for (let i = 0; i < rating.length; i++) {
        for (let j = 0; j < rating.length; j++) {
            let temp = rating[j];
            if (temp > rating[j + 1]) {
                rating[j] = rating[j + 1];
                rating[j + 1] = temp;
            }
        }
    }
    let newList = [];
    for (let i = 0; i < rating.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (rating[i] == arr[j].rating) newList.push(arr[j]);
        }
    }
    displayMovies(newList);

}

function highToLow(arr) {
    let rating = [];
    for (let i = 0; i < arr.length; i++) {
        rating.push(arr[i].rating);
    }
    for (let i = 0; i < rating.length; i++) {
        for (let j = 0; j < rating.length; j++) {
            let temp = rating[j];
            if (temp < rating[j + 1]) {
                rating[j] = rating[j + 1];
                rating[j + 1] = temp;
            }
        }
    }
    console.log(rating);
    let newList = [];
    for (let i = 0; i < rating.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (rating[i] == arr[j].rating) newList.push(arr[j]);
        }
    }
    displayMovies(newList);

}

