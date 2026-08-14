const e = {};
document.querySelectorAll('[id]').forEach(el => e[el.id] = el);  //看不懂です
var tprogress = 0;
var tnumber = Object.keys(e).filter(key => key.startsWith('at')).length; //这句是AI在cor.js写的，我又复用了。虽然看不懂
var cnumber = Object.keys(e).filter(key => key.startsWith(`t${tprogress}c`)).length;
var giveanswer = [];

function changet(){
    giveanswer=[];
    replacebutton();
    tprogress ++;
    if(tprogress < tnumber){
        e.tn.textContent= `${tprogress +1 }/${tnumber}`;
        upgradebutton();
        cnumber = Object.keys(e).filter(key => key.startsWith(`t${tprogress}c`)).length;
        e[`at${tprogress}`].style.display="flex";
        e[`at${tprogress}`].style.transform="translateX(-100%)";
        e[`at${tprogress}`].style.animation="tin 0.5s ease-in-out forwards";
        e[`at${tprogress-1}`].style.animation="tout 0.5s ease-in-out forwards";
        setTimeout(()=>{e[`at${tprogress-1}`].style.display="none";},500);
    }
}

e.tn.textContent= `${tprogress +1 }/${tnumber}`;

function replacebutton(){
    for(let i=0;i<=cnumber-1;i++){
        e[`at${tprogress}`].appendChild(e[`t${tprogress}c${i}`]);
        e[`t${tprogress}c${i}`].style.marginTop="44vh";
    }
    for(let i=0;i<= giveanswer.length - 1;i++){
        e.giveanswer.appendChild(e[`t${tprogress}c${giveanswer[i]}`]);
        e[`t${tprogress}c${giveanswer[i]}`].style.marginTop="36vh";
    }
    
}

function upgradebutton(){
for(let i=0;i<=cnumber-1;i++){
    e[`t${tprogress}c${i}`].onclick = ()=>{
        if(e[`t${tprogress}c${i}`].parentNode != e.giveanswer){
            giveanswer.push(i); 
        }
        else{
            giveanswer.splice(giveanswer.indexOf(i),1);
        }
        replacebutton();
    }
}
}

e.check.onclick=()=>{
    
    if(JSON.stringify(giveanswer) === e[`t${tprogress}a`].getAttribute("data-answer")){
        if(tprogress < tnumber){
            changet();
        }
        if(tprogress == tnumber){
            e.whitemask1.style.zIndex="16";
            e.whitemask1.style.display="";
            e.whitemask1.style.animation="whitemaskkosvion1 0.5s ease-in forwards";
            var courseprogress = parseInt(localStorage.getItem("courseprogress"),16);
            if(courseprogress == Number(e.nt.getAttribute("data-nt"))){
                courseprogress++;
                var showcourseprogress = courseprogress.toString(16).toUpperCase().padStart(2,"0");
                localStorage.setItem('courseprogress', showcourseprogress);
            }
            setTimeout(()=>{window.location.href="../cor.html";},500);
        }
    }
    else{
        document.body.style.background="rgba(255,218,26,1)";
        e.textzone.style.borderColor="rgba(235,198,6,1)";
        e.examzone.style.borderColor="rgba(235,198,6,1)";
        setTimeout(()=>{alert("答案不正确哦");},10)
        giveanswer=[];
        replacebutton();
        setTimeout(()=>{
        document.body.style.background="rgba(180,200,180,1)";
        e.textzone.style.borderColor="rgba(20,100,80,1)";
        e.examzone.style.borderColor="rgba(20,100,80,1)";},500);
        
    }
    
}


replacebutton();
upgradebutton();
setTimeout(()=>{e.whitemask0.style.display = "none";},500);