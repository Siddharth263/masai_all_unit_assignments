// api key : 24533c28ea3aea13cca77cc4e2e75a63
    // url : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=24533c28ea3aea13cca77cc4e2e75a63

    function getData(event) {
        let city = document.querySelector("#city").value;

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81ced8e39173f9645d75d616cdb2e3ee`;

        weather();

        async function weather() {
            let data = await fetch(url);
            try {
                let weather = await data.json();
            append(weather);
            console.log(weather);
            } catch (error) {
                let div = document.querySelector("#showdata");
                div.innerText = "City not available"
                console.log(error);
            }

        }
    }

    function append(weather) {

        // mao for the searched city
        let img = `https://maps.google.com/maps?q=${weather.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

        // weather data for the searched city
        div = document.querySelector("#showdata");
        div.innerHTML = null;
        let weImg = document.createElement("img");
        weImg.src = "https://icons-for-free.com/download-icon-sun+sunrise+weather+icon-1320196637098579511_512.png";
        weImg.style.width = "5%";

        let head = document.createElement("div");
        let span = document.createElement("span");
        span.append(weImg);

        let h2 = document.createElement("h2");
        let span1 = document.createElement("span");
        h2.innerText = weather.name;
        span1.append(h2);

        let temp = document.createElement("p");
        let t = weather.main.temp - 273;
        temp.innerText = `Temp: ${t.toFixed(1)}`

        let min_temp = document.createElement("p");
        let tMin = weather.main.temp_min - 273 - 10;
        min_temp.innerText = `Min. Temp: ${tMin.toFixed(1)}`

        let max_temp = document.createElement("p");
        let tMax = weather.main.temp_max - 273 + 5;
        max_temp.innerText = `Max. Temp: ${tMax.toFixed(1)}`;

        // appended all the data:
        let frame = document.querySelector("#gmap_canvas");
        frame.src = img;
        head.append(span1,span);
        div.append(head, temp, min_temp, max_temp);
    }