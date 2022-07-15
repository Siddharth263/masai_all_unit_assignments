document.querySelector("#submit").addEventListener("click", myFunction);

function myFunction(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let num = document.querySelector("#number").value;
    let gen = document.querySelector("#Gender").value;
    let mail = document.querySelector("#email").value;
    let mob = document.querySelector("#mob").value;
    let arr=[];
    arr.push(name);
    arr.push(num);
    arr.push(gen);
    arr.push(mail);
    arr.push(mob);
    console.log(arr);
}