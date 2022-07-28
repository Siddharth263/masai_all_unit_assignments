function isEvenOdd(num){
    let c=num%2;
    if((c===0)||(c!==0)){
        if((c===num)||(c===0)){
            console.log("Is Even");
        }
        else{
            console.log("Is Odd");
        }
    }
    else{
        console.log("Invalid Input")
    }
}
let num1=2,num2=1.2,num3=-1.6,num4=-2;
isEvenOdd(num1);
isEvenOdd(num2);
isEvenOdd(num3);
isEvenOdd(num4);