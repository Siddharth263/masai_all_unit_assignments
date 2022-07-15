let button = document.getElementById("of");

button.addEventListener("click", change);
function change() {
    let form = document.getElementById("form")
    form.style = "visibility:visible";
    form.style.display = "grid";
    form.style.gridTemplateColumns = "3fr 1fr";
    event.preventDefault();
    function append(s){
        return new Promise((resolve, reject)=> {
            let script = document.createElement('script');
            script.src=s;
            document.head.append(script);
            script.onload=function(){
                resolve("Scripted loaded");
            }
            script.onerror=function(){
                reject("Error loading script");
            }
        })
    }
    console.log(append("./index2.js"))
}