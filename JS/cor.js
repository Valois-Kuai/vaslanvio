const e = {};
document.querySelectorAll('[id]').forEach(el => e[el.id] = el);  //看不懂です

var coursenumber = Object.keys(e).filter(key => key.startsWith('course')).length -1; //这句是AI写的

//button0是用来更改top蓝条的样式的，0为down,1为up
//button1用来回到主页
var button0state = 0;
var temp = localStorage.getItem("button0state");  //保存是localStorage.setItem('button0state', button0state);
if(temp != null){
    button0state = Number(temp);
}

function strtonumber(temp){
    temp = parseInt(temp,16);
    return temp;
}
var courseprogress = "00";
temp = localStorage.getItem("courseprogress");
if(temp != null){
    courseprogress = strtonumber(temp);
}
else{
    localStorage.setItem('courseprogress',"00");
}

function checkcourseprogress(){
    for(var i=0;i<= coursenumber - 1; i++){
        if(i<courseprogress){
            e[`course${i}`].style.background = "rgba(145,208,197,1)";
            e[`course${i}`].style.borderColor = "rgba(145,208,197,1)";
            e[`course${i}`].style.pointerEvents = "";
        }
        else if(i==courseprogress){
            e[`course${i}`].style.background = "rgba(255,218,26,1)";
            e[`course${i}`].style.borderColor = "rgba(255,218,26,1)";
            e[`course${i}`].style.pointerEvents = "";
        }
        else if(i>courseprogress){
            e[`course${i}`].style.background = "rgba(158,152,147,1)";
            e[`course${i}`].style.borderColor = "rgba(158,152,147,1)";
            e[`course${i}`].style.pointerEvents = "none";
        }
    }
}

function drawlinebetweenbutton(a){
    var coordinate0 = e[`course${a}`].getBoundingClientRect();
    var coordinate1 = e[`course${a+1}`].getBoundingClientRect();
    var coordinatesvg = e[`line${a}`].getBoundingClientRect();

    var x1 = coordinate0.left + coordinate0.width*0.5 - coordinatesvg.left;
    var y1 = coordinate0.top + coordinate0.height - 4 - coordinatesvg.top;
    var x2 = coordinate1.left + coordinate1.width*0.5- coordinatesvg.left;
    var y2 = coordinate1.top + 4 - coordinatesvg.top;

    e[`line${a}`].innerHTML = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#C8C8C8" stroke-width="4"/>`;
}

function checkbutton0state(){    //不想按shift了，变量名全小写罢
    if(button0state==0){
        e.topbase.style.animation = "topdown-base 0.5s ease-in-out forwards";
        e.toptext.style.animation = "topdown-toptext 0.5s ease-in-out forwards";
        e.toptext0.style.animation = "topdown-toptext 0.5s ease-in-out forwards";
        e.toptext2.style.animation = "topdown-toptext 0.5s ease-in-out forwards";
        e.toptext1.style.animation = "topdown-toptext1 0.5s ease-in-out forwards";
        e.button0.style.animation = "topdown-button0 0.5s ease-in-out forwards";
        e.button1.style.animation = "topdown-button1 0.5s ease-in-out forwards";
    }
    if(button0state==1){
        e.topbase.style.animation = "topup-base 0.5s ease-in-out forwards";
        e.toptext.style.animation = "topup-toptext 0.5s ease-in-out forwards";
        e.toptext0.style.animation = "topup-toptext 0.5s ease-in-out forwards";
        e.toptext2.style.animation = "topup-toptext 0.5s ease-in-out forwards";
        e.toptext1.style.animation = "topup-toptext1 0.5s ease-in-out forwards";
        e.button0.style.animation = "topup-button0 0.5s ease-in-out forwards";
        e.button1.style.animation = "topup-button1 0.5s ease-in-out forwards";
    }
} //芝士管理button0的
if(button0state==0){
        e.topbase.style.animation = "topdown-base 0s ease-in-out forwards";
        e.toptext.style.animation = "topdown-toptext 0s ease-in-out forwards";
        e.toptext0.style.animation = "topdown-toptext 0s ease-in-out forwards";
        e.toptext2.style.animation = "topdown-toptext 0s ease-in-out forwards";
        e.toptext1.style.animation = "topdown-toptext1 0s ease-in-out forwards";
        e.button0.style.animation = "topdown-button0 0s ease-in-out forwards";
        e.button1.style.animation = "topdown-button1 0s ease-in-out forwards";
    } //开始先把按钮位置固定
if(button0state==1){
        e.topbase.style.animation = "topup-base 0s ease-in-out forwards";
        e.toptext.style.opacity=0;
        e.toptext0.style.opacity=0;
        e.toptext2.style.opacity=0;
        e.toptext1.style.animation = "topup-toptext1 0s ease-in-out forwards";
        e.button0.style.animation = "topup-button0 0s ease-in-out forwards";
        e.button1.style.animation = "topup-button1 0s ease-in-out forwards";
    }

setTimeout(()=>{e.whitemask0.style.display="none";},500);

e.button0.onclick = () =>{
    if(button0state==0){
        button0state = 1;
    }
    else{
        button0state = 0;
    }
    checkbutton0state();
    localStorage.setItem('button0state', button0state);
}
e.button1.onclick = () => {
    e.whitemask1.style.zIndex="16";
    e.whitemask1.style.display="";
    e.whitemask1.style.animation="whitemaskkosvion1 0.5s ease-in forwards";
    setTimeout(()=>{window.location.href="main.html";},500);
}

var showcourseprogress = courseprogress.toString(16).toUpperCase().padStart(2,"0");
e.toptext1.textContent = `当前的课程进度代码为：${showcourseprogress}`;

function drawline(){
    for(var i=0; i <= coursenumber - 2; i++){
        drawlinebetweenbutton(i);
    }
}

e.toptext.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        var temp = strtonumber(e.toptext.value);
        if(!isNaN(temp)){
            courseprogress = temp;
            checkcourseprogress();
            e.toptext.value = "";
        }
        else{
            alert("Error: 无法转化的课程进度代码");
            courseprogress = 0;
            e.toptext.value = "";
        }
        
        var showcourseprogress = courseprogress.toString(16).toUpperCase().padStart(2,"0");
        e.toptext1.textContent = `当前的课程进度代码为：${showcourseprogress}`;
        localStorage.setItem('courseprogress', showcourseprogress);
        
    }
});


for(let i=0;i <= coursenumber-1;i++){  //AI告诉我let是一个语法糖？而var在这里不能用，天哪
    e[`course${i}`].onclick = ()=>{
    e.whitemask1.style.zIndex="16";
    e.whitemask1.style.display="";
    e.whitemask1.style.animation="whitemaskkosvion1 0.5s ease-in forwards";
    setTimeout(()=>{window.location.href=`./course/cor${i}.html`;},500);
}
}





window.addEventListener('load', drawline);
window.addEventListener('resize', drawline);
checkcourseprogress();


//我觉得纯AI代码不超过5%罢，完全胜利ですわ