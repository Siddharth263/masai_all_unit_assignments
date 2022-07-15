document.querySelector("form").addEventListener("Submit", myFunction);

function myFunction(event){
    event.preventDefault();
    console.log("inside function");
}