let gti = 1000000; // gti = grossTaxableIncome
let si = 100000; // si = savingsIncome

let calculateTax = (gti) => {
    let tax;
    if(gti<250000){
        return "Not Applicable for taxes";
    }
    else if(gti>=250000 && gti<500000){
        tax = gti*0.1;
        return tax;
    }
    else if(gti>=500000 && gti<1000000){
        tax = gti*0.2;
        return tax;
    }
    else{
        tax = gti*0.3;
        return tax;
    }
}

let rebate = (si,gti) => {
    let rebate;
    if(gti>=250000 && gti<500000){
        rebate = si - si*0.5;
        if(rebate > 50000){
            rebate = 50000;
            return rebate
        }
        return rebate;
    }
    else if(gti>500000 && gti<1000000){
        rebate = si - si*0.3;
        if(rebate > 50000){
            rebate = 50000;
            return rebate
        }
        return rebate;
    }
    else{
        rebate = si - si*0.1;
        if(rebate > 50000){
            rebate = 50000;
            return rebate
        }
        return rebate;
    }
}

export {calculateTax, rebate};