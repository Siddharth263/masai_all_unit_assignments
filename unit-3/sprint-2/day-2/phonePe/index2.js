let data = JSON.parse(localStorage.getItem("data"));
alert("Enter the otp: 1234");

let button = document.getElementById("chkOtp");
button.addEventListener("click", chkOtp);

function chkOtp(){
    let otp = document.getElementById("otp");
    
    let divP = document.createElement("div");

    let div1 = document.createElement("div");
    div1.innerText = "Transaction Pending";
    div1.style.backgroundColor = "yellow"

    let div2 = document.createElement("div");
    div2.innerText = "Transaction ID : 123456789";

    let div3 = document.createElement("div");
    div3.innerText = `Paid To : ${data[0].rcname}`;

    let div4 = document.createElement("div");
    div4.innerText = `XXXXXX2847: ${data[0].amount}`;
    if (otp.value == 1234) {    
        setTimeout(function () {
            div1.innerText = "Transaction Successful";
            div1.style.backgroundColor = "green"
            div1.style.color = "white";
            divP.append(div1,div2,div3,div4);
            document.body.append(divP);
        },2000)
        divP.append(div1,div2,div3,div4);
        document.body.append(divP);
    }
    else {        
        setTimeout(function () {
            div1.style.color = "white";
            div1.innerText = "Transaction Rejected";
            div1.style.backgroundColor = "red"
            divP.append(div1,div2,div3,div4);
            document.body.append(divP);
        },2000)
        divP.append(div1,div2,div3,div4);
        document.body.append(divP);
    }
}

