let changeTime = (t)=>{
    let hrs = t/(60*60*1000);
    if(hrs<1){
        let min = hrs*60;
        if(min<1){
            let sec = min*60;
            return(`${sec.toFixed(0)} Seconds`);
        }
        else if(min>=1){
            let temp = min%10;
            if(temp === 0){
                return (`${min} Minutes`);
            }
            else{
                min = Math.floor(temp);
                let secs = temp*60;
                if(secs>60){
                    temp = secs/60;
                    min = min + Math.floor(temp);
                    secs = temp*6;
                    if(secs===0){
                        return(`${min} Minutes`)
                    } else{
                        return(`${min} Minutes ${secs.toFixed(0)} Seconds`);
                    } 
                }
            }
        }
    }
    else if(hrs>=1){
        let temp = hrs%10;
        if(temp===0){
            return(`${hrs} Hours`);
        }
        else{
            hrs = Math.floor(hrs);
            let min = temp*6;
            if(min>60){
                temp = min/60;
                hrs = hrs+Math.floor(temp);
                min = (temp%10)*6;
                if(min===0) {
                    return(`${min} Hours`);
                }else {
                    return(`${hrs} Hours ${min.toFixed(0)} Minutes`);
                }
            }
            else {
                let secs = (min%10)*6;
                min = Math.floor(min);
                if(secs===0) {
                    return(`${min} Hours ${min} Minutes`);
                }else {
                    return(`${min} Hours ${min} Minutes ${secs.toFixed(0)} Seconds`);
                }
            }
        }
    }
}

export default changeTime;