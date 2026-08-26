const KanKin0 = document.getElementById("d0");
const KanKin1 = document.getElementById("d1");
const KanKin2 = document.getElementById("d2");
const KanKin3 = document.getElementById("d3");
const KanKin4 = document.getElementById("d4");
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
    if(sus==3){
        a.href="./file/人类语非强制语法规范合集.pdf";
        a.download="人类语非强制语法规范合集.pdf";
    }
    
    if(sus==4){
        a.href="./file/人类语万词表.xlsx";
        a.download="人类语万词表.xlsx";
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

KanKin0.onclick = () => DownLoad(0); //这个所谓叫闭包的写法真的看不懂
KanKin1.onclick = () => DownLoad(1);
KanKin2.onclick = () => DownLoad(2);
KanKin3.onclick = () => DownLoad(3);
KanKin4.onclick = () => DownLoad(4);

setTimeout(()=>{
    HuaTioMeVion.style.zIndex=0;
    HuaTioMeVion.style.display = "none";
},500)