document.querySelector("#roll").addEventListener("click", roll);
let arr = [1, 2, 3, 4, 5, 6];
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

function roll() {
    p1.innerText = Math.floor(Math.random() * arr.length);
    p2.innerText = Math.floor(Math.random() * arr.length);
    p3.innerText = Math.floor(Math.random() * arr.length);
    document.querySelector("#member-1").append(p1);
    document.querySelector("#member-2").append(p2);
    document.querySelector("#member-3").append(p3);

    if(p1.innerText != p2.innerText && p1.innerText != p3.innerText && p2.innerText != p3.innerText){
        if (p1.innerText > p2.innerText && p1.innerText > p3.innerText) {
            document.querySelector("#member-1").style.backgroundColor = "green";
            if (p3.innerText > p2.innerText) {
                document.querySelector("#member-3").style.backgroundColor = "yellow";
                document.querySelector("#member-2").style.backgroundColor = "red";
            }
            else {
                document.querySelector("#member-3").style.backgroundColor = "red";
                document.querySelector("#member-2").style.backgroundColor = "yellow";
            }
        }
        else if (p3.innerText > p1.innerText && p3.innerText > p2.innerText) {
            document.querySelector("#member-3").style.backgroundColor = "green";
            if(p1.innerText>p2.innerText){
                document.querySelector("#member-2").style.backgroundColor = "red";
                document.querySelector("#member-1").style.backgroundColor = "yellow"
            }
            else{
                document.querySelector("#member-2").style.backgroundColor = "yellow";
                document.querySelector("#member-1").style.backgroundColor = "red"
            }
        }
        else {
            document.querySelector("#member-2").style.backgroundColor = "green";
            if (p1.innerText > p3.innerText) {
                document.querySelector("#member-3").style.backgroundColor = "red";
                document.querySelector("#member-1").style.backgroundColor = "yellow";
            }
            else {
                document.querySelector("#member-3").style.backgroundColor = "yellow";
                document.querySelector("#member-1").style.backgroundColor = "red";
    
            }
        }
    }

    else if (p1.innerText == p2.innerText && p1.innerText != p3.innerText) {
        document.querySelector("#member-1").style.backgroundColor = "blue"
        document.querySelector("#member-2").style.backgroundColor = "blue"
        if (p1.innerText > p3.innerText) {
            document.querySelector("#member-3").style.backgroundColor = "red";
        }
        else {
            document.querySelector("#member-3").style.backgroundColor = "green";
        }
    }
    else if (p1.innerText == p3.innerText && p1.innerText != p2.innerText) {
        document.querySelector("#member-1").style.backgroundColor = "blue";
        document.querySelector("#member-3").style.backgroundColor = "blue";
        if (p1.innerText > p2.innerText) {
            document.querySelector("#member-2").style.backgroundColor = "red";
        } else {
            document.querySelector("#member-2").style.backgroundColor = "green";
        }
    }
    else if (p2.innerText == p3.innerText && p2.innerText != p1.innerText) {
        document.querySelector("#member-2").style.backgroundColor = "blue";
        document.querySelector("#member-3").style.backgroundColor = "blue";
        if (p1.innerText > p3.innerText) {
            document.querySelector("#member-1").style.backgroundColor = "green";
        } else {
            document.querySelector("#member-1").style.backgroundColor = "red";
        }
    }
    else if (p1.innerText == p2.innerText && p1.innerText == p3.innerText) {
        document.querySelector("#member-1").style.backgroundColor = "blue";
        document.querySelector("#member-2").style.backgroundColor = "blue";
        document.querySelector("#member-3").style.backgroundColor = "blue";
    }
}