const KanKin0 = document.getElementById("d0");
const KanKin1 = document.getElementById("d1");
const KanKin2 = document.getElementById("d2");
const HuaTioMeVion = document.getElementById("huatiomevion");

function DownLoad(sus){
    const a = document.createElement("a");

    if(sus==0){
        a.href="./file/人类语.xlsx";
        a.download="人类语.xlsx";
    }
    if(sus==1){
        a.href="./file/人类语字体与码位表.rar";
        a.download="人类语字体与码位表.rar";
    }
    if(sus==2){
        a.href="./file/人类语造字法.xlsx";
        a.download="人类语造字法.xlsx";
    }
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

KanKin0.onclick = () => DownLoad(0); //这个所谓叫闭包的写法真的看不懂
KanKin1.onclick = () => DownLoad(1);
KanKin2.onclick = () => DownLoad(2);

setTimeout(()=>{
    HuaTioMeVion.style.zIndex=0;
    HuaTioMeVion.style.display = "none";
},500)