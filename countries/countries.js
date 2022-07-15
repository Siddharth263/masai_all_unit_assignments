let country = document.querySelector("#country");

function myFunction() {
    switch (country.value) {
        case "India": alert("Your continent is Asia");
            break;
        case "United States of America": alert("Your continent is North and Central America");
            break;
        case "China": alert("Your continent is Asia");
            break;
        case "Nepal": alert("Your continent is Asia");
            break;
        case "Australia": alert("Your continent is Oceania");
        break;
        case "France": alert("Your continent is Africa");
        break;
        case "Germany": alert("your continent is Europe");
        break;
        case "South Africa": alert("Your continent is Africa");
        break;
        case "Nigeria": alert("Your continent is Africa");
        break;
        case "Mexico": alert("Your continent is North and Central America");
        break;
        case "Brazil": alert("your continent is South America");
        break;
        case "Canada": alert("Your continent is North and Central America");
            break;
        case "Singapore": alert("Your continent is Asia");
            break;
        case "Sweden": alert("Your continent is Europe");
        break;
        default: alert("You are in Asia");
        break;
    }
}

document.querySelector("#btn").addEventListener("click", myFunction);