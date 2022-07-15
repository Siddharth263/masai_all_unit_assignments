let form = document.getElementById("form");
form.addEventListener("submit", transact);

function transact() {
    event.preventDefault();
    let rname = form.rName.value;
    let rcNo = form.rcNo.value;
    let sName = form.sName.value;
    let scNo = form.scNo.value;
    let amount = form.amount.value;
    let data = [];

    if (rname === '' || rcNo === '' || rcNo === '' || sName === '' || scNo === '' || amount === '') {
        alert("All fields are required");
    }
    else {
        let obj = {};
        obj.rname = rname;
        obj.rcNo = rcNo;
        obj.sName = sName;
        obj.scNo = scNo;
        obj.amount = amount;
        data.push(obj);
        localStorage.setItem("data", JSON.stringify(data));
        document.querySelector("#otp-form").style = "visibility: visible";
    }

    return new Promise((resolve,reject) => {
        let script = document.createElement("script");
        script.src = "./index2.js";
        document.head.append(script);
        script.onload = function(){
            resolve("Script loaded");
        }
        script.onerror = function(){
            reject("Script loading failed");
        }
    })

}