const HuaTioMeVion = document.getElementById("huatiomevion");
const HuaTioMeVion1 = document.getElementById("huatiomevion1")
const KanKin0 = document.getElementById("kankin0");
const KanKin1 = document.getElementById("kankin1");
const KanKin2 = document.getElementById("kankin2");

const VinNuTuaVinKosVionNo = 1200;
const TuaVin = performance.now();
var MuVin = performance.now();
var VinJaJonTuaVin = MuVin-TuaVin;



function TuaVinKosTion(MuVin){
    VinJaJonTuaVin = MuVin-TuaVin;
    if(VinJaJonTuaVin<=VinNuTuaVinKosVionNo){
        HuaTioMeVion.style.opacity= 1-(Math.cos((VinJaJonTuaVin/VinNuTuaVinKosVionNo)*Math.PI/2-0.5*Math.PI));
        requestAnimationFrame(TuaVinKosTion);
    }
    if(VinJaJonTuaVin>VinNuTuaVinKosVionNo){
        HuaTioMeVion.style.zIndex=0;
        HuaTioMeVion.style.display = "none";
        return;
    }

    
}
//这个JS动画只是用来练手的，还是CSS动画好用啊

function HuaTioMeVion1KosVion(){
    HuaTioMeVion1.style.zIndex = 2;
    HuaTioMeVion1.style.animation = "huatiomevion1kosvion 0.5s ease-in forwards";
}

function doc(){
    HuaTioMeVion1KosVion();
    setTimeout(()=>{window.location.href="doc.html";},500);
}
function cor(){
    HuaTioMeVion1KosVion();
    setTimeout(()=>{window.location.href="cor.html";},500);
}
function qq(){
    alert("QQ群号为1053556105，欢迎加入！大家一起来发展人类语！");
}

KanKin0.onclick=cor;
KanKin1.onclick=doc;
KanKin2.onclick=qq;
requestAnimationFrame(TuaVinKosTion);
