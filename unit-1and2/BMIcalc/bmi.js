document.querySelector("#btn").addEventListener("click", bmiCheck);
function bmiCheck() {
    let w = document.querySelector("#weight").value;
    let h = document.querySelector("#height").value;
    w = Number(w); h = Number(h);
    let shadow = "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px";
    let bmi = w / (h * h);
    if (bmi <= 18.4) {
        document.querySelector("#show").innerText = "Your BMI is " + bmi.toFixed(3) + " which means you are Under-weight";
        document.querySelector("#show").style.boxShadow = shadow;
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.querySelector("#show").innerText = "Your BMI is " + bmi.toFixed(3) + " which means you are Normal-weight";
        document.querySelector("#show").style.boxShadow = shadow;
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.querySelector("#show").innerText = "Your BMI is " + bmi.toFixed(3) + " which means you are Overweight";
        document.querySelector("#show").style.boxShadow = shadow;
    }
    else {
        document.querySelector("#show").innerText = "Your BMI is " + bmi.toFixed(3) + " which means you are obese";
        document.querySelector("#show").style.boxShadow = shadow;
    }
}




// UnderWeight - bmi <= 18.4
// Normal Weight - bmi >= 18.5 && bmi <= 24.9
// Overweight - bmi >= 25 && bmi <= 29.9
// Obese - bmi >= 30