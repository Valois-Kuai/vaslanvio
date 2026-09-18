var roomeventlist = {
    2: {
        title: {v:"", c:"睡觉吗?", l:"kinlos sen"},
        content: {v:"", c:"", l:""},
        n: 3,
        c: {
            0: {v:"", c:"是的", l:"ki", code: ()=>{
                    e.mask.style.animation="maskon 0.2s ease-in forwards";
                    var sleeptime = (960-sleepy);
                    time = time+sleeptime;
                    sleepy = 960;
                    setTimeout(()=>{e.mask.style.animation="maskoff 0.2s ease-out forwards";},800);
                }
               },
            1: {v:",", c:"是的，并设置一个早上八点的闹钟", l:"ki,nus len pa vinvio nu py tisty ja hymovin",code: ()=>{
                    e.mask.style.animation="maskon 0.2s ease-in forwards";
                    if(time >=480){
                        time = time - 1440;
                        sleepy = sleepy +480 -time;
                    }
                    else{
                        sleepy = sleepy + 480 - time;
                    }
                    time = 480;
                    setTimeout(()=>{e.mask.style.animation="maskoff 0.2s ease-out forwards";},800); 
                }  
            },
            2: {v:"", c:"不", l:"ne", code: ()=>{}}
        }
    },
}

Object.assign(eventlist, roomeventlist);