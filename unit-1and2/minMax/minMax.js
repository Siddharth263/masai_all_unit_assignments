let nums = document.querySelectorAll("#b2c>div");

let score = "";
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", pressed);
}

function pressed(event) {
    targetNum = event.target.innerText;
    score += targetNum;
    document.querySelector("#b2b").innerText = score;
}

let enter = document.querySelector("#box3");
enter.addEventListener("click", entered);
function entered() {
    let min = document.querySelector("#min").innerText;
    min = Number(min);
    let max = document.querySelector("#max").innerText;
    max = Number(max);
    if(score<min){
        document.querySelector("#min").innerText= score;
        document.querySelector("#b2b").innerText = "#"
        score = "";
    }
    if(score>max){
        document.querySelector("#max").innerText=score;
        document.querySelector("#b2b").innerText = "#"
        score = "";
    }
    else{
        document.querySelector("#b2b").innerText = "#"; 
        score = "";
    }
}