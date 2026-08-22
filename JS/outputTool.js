const e = {};
document.querySelectorAll('[id]').forEach(el => e[el.id] = el);
const tvh = ["t","v","h","l","m","p","k","j","[","]",",",".",":","'"];
const lelist={
    "ta": "00",
    "ti": "01",
    "tu": "02",
    "te":"03",
    "to":"04",
    "tas":"05",
    "tis":"06",
    "tus":"07",
    "tos":"08",
    "tan":"09",
    "tin":"0a",
    "ten":"0b",
    "ton":"0c",
    "ty":"0d",
    "tua":"0e",
    "tio":"0f",
    "tion":"10",
    "va":"11",
    "vi":"12",
    "ve":"13",
    "vo":"14",
    "vas":"15",
    "vis":"16",
    "vos":"17",
    "vin":"18",
    "ven":"19",
    "von":"1a",
    "vy":"1b",
    "vua":"1c",
    "vys":"1d",
    "vio":"1e",
    "vion":"1f",
    "ha":"20",
    "hi":"21",
    "hu":"22",
    "he":"23",
    "ho":"24",
    "has":"25",
    "hin":"26",
    "hen":"27",
    "hon":"28",
    "hy":"29",
    "hua":"2a",
    "hion":"2b",
    "la":"2c",
    "li":"2d",
    "lu":"2e",
    "le":"2f",
    "lo":"30",
    "las":"31",
    "lis":"32",
    "lus":"33",
    "los":"34",
    "lan":"35",
    "lin":"36",
    "len":"37",
    "lon":"38",
    "ly":"39",
    "lua":"3a",
    "lys":"3b",
    "lio":"3c",
    "lion":"3d",
    "ma":"3e",
    "mi":"3f",
    "mu":"40",
    "me":"41",
    "mo":"42",
    "mas":"43",
    "min":"44",
    "men":"45",
    "my":"46",
    "mua":"47",
    "na":"48",
    "ni":"49",
    "nu":"4a",
    "ne":"4b",
    "no":"4c",
    "nas":"4d",
    "nis":"4e",
    "nus":"4f",
    "nos":"50",
    "nan":"51",
    "nin":"52",
    "nen":"53",
    "non":"54",
    "nua":"55",
    "nio":"56",
    "pa":"57",
    "pe":"58",
    "pas":"59",
    "pan":"5a",
    "pin":"5b",
    "pen":"5c",
    "pon":"5d",
    "py":"5e",
    "pua":"5f",
    "pio":"60",
    "sa":"61",
    "si":"62",
    "su":"63",
    "se":"64",
    "so":"65",
    "sas":"66",
    "sis":"67",
    "sus":"68",
    "sos":"69",
    "san":"6a",
    "sin":"6b",
    "sen":"6c",
    "son":"6d",
    "sy":"6e",
    "sua":"6f",
    "sys":"70",
    "sio":"71",
    "sion":"72",
    "ka":"73",
    "ki":"74",
    "ku":"75",
    "ke":"76",
    "ko":"77",
    "kas":"78",
    "kis":"79",
    "kus":"7a",
    "kos":"7b",
    "kan":"7c",
    "kin":"7d",
    "ken":"7e",
    "kon":"7f",
    "ky":"80",
    "kua":"81",
    "kys":"82",
    "kio":"83",
    "kion":"84",
    "ja":"85",
    "ju":"86",
    "je":"87",
    "jo":"88",
    "jas":"89",
    "jus":"8a",
    "jos":"8b",
    "jan":"8c",
    "jin":"8d",
    "jen":"8e",
    "jon":"8f",
    "jua":"90",
};

e.ifhaveundefind.style.display = "none";

e.t0.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        var temp = e.t0.value;
        if(/^[\x00-\x7F]*$/.test(temp) == 1){
            var output = [];
            var outputprepare = [];
            var temptemp = "";
            temp = temp.replace(/\s/g,"");
            for(var thechar of temp){
                
                if(tvh.includes(thechar)){
                    outputprepare.push(temptemp);
                    temptemp = thechar; 
                }
                else if(temptemp[temptemp.length - 1]=="s"){
                    var temptemptemp =temptemp.slice(0,-1);
                    if(temptemptemp != ""){
                        outputprepare.push(temptemptemp);
                    }
                    temptemp = "s"+thechar
                }
                else if(thechar=="n"){
                    if(temptemp[temptemp.length - 1]=="n"){
                        outputprepare.push(temptemp);
                        temptemp = thechar;
                    }
                    else{
                    temptemp += thechar;
                    }
                }

                else{
                    if(temptemp[temptemp.length - 1]=="n"){
                    var temptemptemp =temptemp.slice(0,-1);
                    if(temptemptemp != ""){
                        outputprepare.push(temptemptemp);
                    }
                    temptemp = "n"+thechar
                    }
                    else{
                       temptemp += thechar; 
                    }
                    
                }
            
            }
            outputprepare.push(temptemp);

            
            if(outputprepare[0] ==""){
                outputprepare.shift();
            }
            for(var i of outputprepare){
                if(lelist[i] != undefined){
                    output.push("&#xe0"+lelist[i]+";");
                }
                else if(i=="["){
                    output.push("[");
                }
                else if(i=="]"){
                    output.push("]");
                }
                else if(i==","){
                    output.push(",");
                }
                else if(i=="."){
                    output.push(".");
                }
                else if(i==":"){
                    output.push(":");
                }
                else if(i=="'"){
                    output.push("'");
                }
                else{
                    e.ifhaveundefind.style.display="block";
                }
                
            }
            e.output.innerHTML = output.join("");
        }
        else{
            alert("Error: 无法转化的输入");
            e.t0.value = "";
        }
    
    }
});