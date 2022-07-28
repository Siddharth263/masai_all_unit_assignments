// api key : 24533c28ea3aea13cca77cc4e2e75a63
// url : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=24533c28ea3aea13cca77cc4e2e75a63


function getWeatherOnLocation(lat, lon, acc) {

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=24533c28ea3aea13cca77cc4e2e75a63`;

    weather();

    async function weather() {
        let data = await fetch(url);
        try {
            let weather = await data.json();
            append(weather.daily, lat, lon, acc);
            console.log(weather.daily);
        } catch (error) {
            let div = document.querySelector("#showdata");
            div.innerText = "City not available";
            console.log(error);
        }

    }
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(success);

    function success(pos) {
        const crd = pos.coords;
        getWeatherOnLocation(crd.latitude, crd.longitude, crd.accuracy);
    }
}

function append(weather, lat, lon, acc) {

    weather.forEach(function (el,index) {
        let box = document.createElement("div"); ;

        let day = document.createElement("p");

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ (today.getDate() + index);
        let d = new Date(date);
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        day.innerText = days[d.getDay()];

        // to get the icon for the respective day with weather
        let icon = document.createElement("img");
        icon.src = `http://openweathermap.org/img/w/${el.weather[0].icon}.png`;

        let curr_temp = document.createElement("p");
        curr_temp.innerText = (el.temp.day - 273).toFixed(1);
        
        let min_temp = document.createElement("p");
        min_temp.innerText = (el.temp.min - 273).toFixed(1);

        box.append(day,icon,curr_temp,min_temp);
        box.style.borderRadius = "10px";
        box.style.width = "11%";
        box.style.backgroundColor = "black";
        box.style.color = "white";
        box.style.display = "grid";
        box.style.justifyContent = "center";

        document.querySelector("#showdata").append(box);
    })

    let div = document.querySelector("#showdata");
    div.style.border = "1px solid transparent"
    div.style.padding = "20px"
    div.style.backgroundColor = "gray";

    div.style.display = "flex";
    div.style.justifyContent = "space-evenly";

    div.style.borderRadius = "10px";
}