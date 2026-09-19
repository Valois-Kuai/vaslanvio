const canvas = e.canvas.getContext("2d");
e.canvas.width = width;
e.canvas.height= height;

function redraw(){
  canvas.clearRect(0,0,width,height);
  canvas.fillStyle="rgb(238,232,222)";
  canvas.fillRect(0,0,width,height);
  //左侧墙壁
  canvas.beginPath();
  canvas.moveTo(0,0);
  canvas.lineTo(0.2*width,0);
  canvas.lineTo(0.2*width,0.7*height);
  canvas.lineTo(0,height);
  canvas.lineTo(0,0);
  canvas.closePath();
  canvas.fillStyle = "rgb(238,232,222)";
  canvas.fill();
  //正对面的墙壁
  canvas.beginPath();
  canvas.moveTo(0.2*width,0);
  canvas.lineTo(width,0);
  canvas.lineTo(width,0.7*height);
  canvas.lineTo(0.2*width,0.7*height);
  canvas.lineTo(0.2*width,0);
  canvas.closePath();
  canvas.fillStyle="rgb(234, 229, 220)";
  canvas.fill();
  //门
  canvas.beginPath();
  canvas.moveTo(0.18*width,0.1*height);
  canvas.lineTo(0.18*width,height);
  canvas.lineTo(0.05*width,height);
  canvas.lineTo(0.05*width,(0.1+39/200)*height);
  canvas.closePath();
  canvas.fillStyle="rgb(201, 176, 140)";
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(0.17*width,0.135*height);
  canvas.lineTo(0.17*width,height);
  canvas.lineTo(0.06*width,height);
  canvas.lineTo(0.06*width,(0.135+33/200)*height);
  canvas.closePath();
  canvas.fillStyle="rgb(176, 141, 87)";
  canvas.fill();
  //门把手阴影
  canvas.beginPath();
  canvas.ellipse(0.08*width,0.55*height,Math.min(0.013*width,0.013*height),0.014*height,0,0,2*Math.PI);
  canvas.fillStyle="rgba(0,0,0,0.05)";
  canvas.fill();
  //门把手
  canvas.beginPath();
  canvas.ellipse(0.08*width,0.55*height,Math.min(0.01*width,0.01*height),0.01*height,0,0,2*Math.PI);
  canvas.fillStyle="rgb(110, 90, 68)";
  canvas.fill();
  //地板
  canvas.beginPath();
  canvas.moveTo(0,height);
  canvas.lineTo(0.2*width,0.7*height);
  canvas.lineTo(width,0.7*height);
  canvas.lineTo(width,height);
  canvas.lineTo(0,height);
  canvas.closePath();
  canvas.fillStyle="rgb(196, 170, 136)";
  canvas.fill();
  //有关墙壁的环境光遮蔽
  canvas.beginPath();
  canvas.moveTo(0.2*width,0);
  canvas.lineTo(0.2*width,0.7*height);
  canvas.lineTo(0,height);
  canvas.moveTo(0.2*width,0.7*height);
  canvas.lineTo(width,0.7*height);
  canvas.lineWidth=8;
  canvas.strokeStyle="rgba(0,0,0,0.05)";
  canvas.stroke();
  //箱子
  canvas.beginPath();
  canvas.moveTo(0.3*width,0.5*height);
  canvas.lineTo(0.6*width,0.5*height);
  canvas.lineTo(0.52*width,(0.5+6/50)*height);
  canvas.lineTo(0.22*width,(0.5+6/50)*height);
  canvas.closePath();
  canvas.fillStyle="rgb(128,143,132)";
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(0.6*width,0.5*height);
  canvas.lineTo(0.6*width,0.7*height);
  canvas.lineTo(0.52*width,(0.7+6/50)*height);
  canvas.lineTo(0.52*width,(0.5+6/50)*height);
  canvas.closePath();
  canvas.fillStyle="#515C54";
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(0.52*width,(0.5+6/50)*height);
  canvas.lineTo(0.52*width,(0.7+6/50)*height);
  canvas.lineTo(0.22*width,(0.7+6/50)*height);
  canvas.lineTo(0.22*width,(0.5+6/50)*height);
  canvas.closePath();
  canvas.fillStyle="#5D6A61";
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo(0.52*width,(0.56+6/50)*height);
  canvas.lineTo(0.22*width,(0.56+6/50)*height);
  canvas.moveTo(0.52*width,(0.56+6/50)*height);
  canvas.lineTo(0.6*width,0.56*height);
  canvas.lineWidth=1;
  canvas.strokeStyle="rgba(0,0,0,0.2)";
  canvas.stroke();
  canvas.fillStyle="#F5F2EC";
  canvas.fillRect(0.37*width-0.006*height,(0.56+6/50)*height-0.01*height,0.012*height,0.02*height);
  //箱子AO
  canvas.beginPath();
  canvas.moveTo(0.22*width,(0.7+6/50)*height);
  canvas.lineTo(0.52*width,(0.7+6/50)*height);
  canvas.lineTo(0.6*width,0.7*height);
  //canvas.moveTo(0.3*width,0.5*height);
  //canvas.lineTo(0.6*width,0.5*height);
  canvas.lineWidth=8;
  canvas.strokeStyle="rgba(0,0,0,0.05)";
  canvas.stroke();
  //床阴影
  canvas.beginPath();
  canvas.moveTo(width,0.6*height);
  canvas.lineTo(width,0.7*height);
  canvas.lineTo((1-7/30+0.02)*width,height);
  canvas.lineTo((1-7/30+0.02)*width,height);
  canvas.lineTo(0.8*width,0.6*height);
  canvas.closePath();
  canvas.fillStyle="rgba(0,0,0,0.05)";
  canvas.fill();
  //床脚
  canvas.beginPath();
  canvas.moveTo(width,0.65*height);
  canvas.lineTo(width,0.7*height);
  canvas.lineTo((1-4/300)*width,0.72*height);
  canvas.lineTo((1-4/300)*width,0.65*height);
  canvas.closePath();
  canvas.fillStyle="#745B39";
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo((1-4/300)*width,0.72*height);
  canvas.lineTo(0.97*width,0.72*height);
  canvas.lineTo(0.97*width,0.65*height);
  canvas.lineTo((1-4/300)*width,0.65*height);
  canvas.closePath();
  canvas.fillStyle="#856842";
  canvas.fill();
  canvas.beginPath();
  canvas.moveTo((1-7/30)*width,height);
  canvas.lineTo((1-7/30+0.02)*width,height);
  canvas.lineTo((1-7/30+0.02)*width,0.9*height);
  canvas.lineTo((1-7/30)*width,0.9*height);
  canvas.closePath();
  canvas.fillStyle="#745B39";
  canvas.fill();
  //床
  canvas.beginPath();
  canvas.moveTo(0.7*width,0.6*height);
  canvas.lineTo(width,0.6*height);
  canvas.lineTo((1-7/30)*width,(0.95)*height);
  canvas.lineTo((0.7-7/30)*width,(0.95)*height);
  canvas.closePath();
  canvas.fillStyle="#7C7369";
  canvas.fill();
  //床的前侧面
  canvas.beginPath();
  canvas.moveTo((1-7/30)*width,(0.95)*height);
  canvas.lineTo((0.7-7/30)*width,(0.95)*height);
  canvas.lineTo((0.7-7/30)*width,height);
  canvas.lineTo((1-7/30)*width,height);
  canvas.closePath();
  canvas.fillStyle="#6C635B";
  canvas.fill();
  //床的右侧面
  canvas.beginPath();
  canvas.moveTo(width,0.6*height);
  canvas.lineTo(width,0.65*height);
  canvas.lineTo((1-7/30)*width,height);
  canvas.lineTo((1-7/30)*width,(0.95)*height);
  canvas.closePath();
  canvas.fillStyle="#5E5750";
  canvas.fill();
  //枕头
  canvas.beginPath();
  canvas.moveTo(0.7*width,0.6*height);
  canvas.lineTo(width,0.6*height);
  canvas.lineTo(0.95*width,(0.6+3/40)*height);
  canvas.lineTo(0.65*width,(0.6+3/40)*height);
  canvas.closePath();
  canvas.fillStyle="#F5F2EC";
  canvas.fill();
  
  
}



e.sleep.onclick=()=>{
  if(event==0 && state == 0){
    state = 0;
    if(sleepy >=480){
      listofevent.push(1);
    }
    else{
      listofevent.push(2);
    }
    clearTimeout(timer);
    retime();
  }
}

var chestdiv;
var chestmain;
var chesttitle;
var closechest;
var chestcontent;
var chestthingdiv;
var chestotherdiv;
var chestthingbutton = [];
var chestthingbuttonimg = [];
var chestmovenumber;
var chestinput;
var chestconfirm;
var chestpackage;
var chestinf;
var chestinftitle;
var chestinfcontent;
var chestmove;
var chestpackagebutton = [];
var chestpackagebuttonimg = [];
var chestthingbuttonnumber = [];
var chestpackagebuttonnumber = [];

e.chest.onclick=()=>{
  state = "chest";
  if(!chestdiv){
    chestdiv = document.createElement("div");
    chestdiv.id = "chestdiv";
    document.body.appendChild(chestdiv);
    chestmain = document.createElement("div");
    chestmain.id = "chestmain";
    chestdiv.appendChild(chestmain);
    chesttitle = document.createElement("div");
    chesttitle.textContent = "";
    chesttitle.id = "chesttitle";
    chestmain.appendChild(chesttitle);
    closechest = document.createElement("button");
    closechest.textContent = "";
    closechest.id = "closechest";
    closechest.onclick=()=>{
      chestdiv.remove();
      state = 0;
    }
    chestmain.appendChild(closechest);
    chestcontent = document.createElement("div");
    chestcontent.id = "chestcontent";
    chestmain.appendChild(chestcontent);
    chestthingdiv = document.createElement("div");
    chestthingdiv.id = "chestthingdiv";
    chestcontent.appendChild(chestthingdiv);
    for(let i = 0; i<21;i++){
      chestthingbutton[i] = document.createElement("button");
      chestthingbutton[i].className = "chestthingbutton";
      chestthingdiv.appendChild(chestthingbutton[i]);
      chestthingbuttonimg[i] = document.createElement("img");
      chestthingbuttonimg[i].className = "chestthingbuttonimg";
      chestthingbutton[i].appendChild(chestthingbuttonimg[i]);
      chestthingbuttonnumber[i] = document.createElement("div");
      chestthingbuttonnumber[i].className = "chestthingbuttonnumber";
      chestthingbutton[i].appendChild(chestthingbuttonnumber[i]);
    }
    chestotherdiv = document.createElement("div");
    chestotherdiv.id = "chestotherdiv";
    chestcontent.appendChild(chestotherdiv);
    chestpackage = document.createElement("div");
    chestpackage.id = "chestpackage";
    chestotherdiv.appendChild(chestpackage);
    chestinf = document.createElement("div");
    chestinf.id = "chestinf";
    chestotherdiv.appendChild(chestinf);
    for(let i=0;i<4;i++){
      chestpackagebutton[i] = document.createElement("button");
      chestpackagebutton[i].className = "chestpackagebutton";
      chestpackage.appendChild(chestpackagebutton[i]);
      chestpackagebuttonimg[i] = document.createElement("img");
      chestpackagebuttonimg[i].className = "chestpackagebuttonimg";
      chestpackagebutton[i].appendChild(chestpackagebuttonimg[i]);
      chestpackagebuttonnumber[i] = document.createElement("div");
      chestpackagebuttonnumber[i].className = "chestpackagebuttonnumber";
      chestpackagebutton[i].appendChild(chestpackagebuttonnumber[i]);
    }
    chestinftitle = document.createElement("div");
    chestinftitle.id = "chestinftitle";
    chestinf.appendChild(chestinftitle);
    chestinfcontent = document.createElement("div");
    chestinfcontent.id = "chestinfcontent";
    chestinf.appendChild(chestinfcontent);
    chestmove = document.createElement("div");
    chestmove.id = "chestmove";
    chestinf.appendChild(chestmove);
    chestmovetitle = document.createElement("div");
    chestmovetitle.id = "chestmovetitle";
    chestmovetitle.textContent = "";
    chestmove.appendChild(chestmovetitle);
    chestinput = document.createElement("input");
    chestinput.type = "text";
    chestinput.id = "chestinput";
    chestmove.appendChild(chestinput);
    chestconfirm = document.createElement("button");
    chestconfirm.id = "chestconfirm";
    chestconfirm.textContent = "";
    chestmove.appendChild(chestconfirm);
  }
  else{
    document.body.appendChild(chestdiv);
  }
  rechest();
}

function rechest(){
  chestinftitle.textContent = "";
  chestinfcontent.textContent = "";
  chestinput.placeholder = "";
  chestinput.value = 0;
  chestconfirm.onclick=()=>{};
  for(let i=0;i<21;i++){
    chestthingbutton[i].onclick=()=>{};
    chestthingbuttonnumber[i].textContent = "";
    if(chestthing[i].name != "" && chestthing[i].number >0 && thinglist[chestthing[i].name]){
      chestthingbuttonimg[i].src = thinglist[chestthing[i].name].img;
      if(chestthing[i].number > 1){
        chestthingbuttonnumber[i].textContent = chestthing[i].number;
      }
      chestthingbutton[i].onclick=()=>{
        chestinftitle.textContent = thinglist[chestthing[i].name].inftitle.v;
        chestinfcontent.textContent = thinglist[chestthing[i].name].infcontent.v;
        chestinput.placeholder = chestthing[i].number;
        chestinput.value = chestthing[i].number;
        chestconfirm.onclick=()=>{
          chestinftitle.textContent = "";
          chestinfcontent.textContent = "";
          if(!Number.isNaN(chestinput.value)){
            var movenumber = Number(chestinput.value);
            if(movenumber > chestthing[i].number){
              give(chestthing[i].name);
              if(able == 1){
                for(var j=1;j<chestthing[i].number;j++){
                  give(chestthing[i].name);
                }
                chestthing[i].number = 0;
              }
            }
            else if(movenumber >0){
              give(chestthing[i].name);
              if(able == 1){
                for(var j=1;j<movenumber;j++){
                  give(chestthing[i].name);
                }
                chestthing[i].number = chestthing[i].number - movenumber;
              }
            }
          }
          rechest();
        }
      }
    }
    else if(!thinglist[chestthing[i].name] || chestthing[i].number <1){
      chestthing[i].name = "";
      chestthing[i].number = 0;
      chestthingbuttonimg[i].src = "../picture/nothing.webp";
    }
    else{
      chestthingbuttonimg[i].src = "../picture/nothing.webp";
    }
  }
  for(let i=0;i<4;i++){
    chestpackagebutton[i].onclick=()=>{};
    chestpackagebuttonnumber[i].textContent = "";
    if(thing[i].name != "" && thing[i].number >0 && thinglist[thing[i].name]){
      chestpackagebuttonimg[i].src = thinglist[thing[i].name].img;
      if(thing[i].number >1){
        chestpackagebuttonnumber[i].textContent = thing[i].number;
      }
      chestpackagebutton[i].onclick=()=>{
        chestinftitle.textContent = thinglist[thing[i].name].inftitle.v;
        chestinfcontent.textContent = thinglist[thing[i].name].infcontent.v;
        chestinput.placeholder = thing[i].number;
        chestinput.value = thing[i].number;
        chestconfirm.onclick=()=>{
          chestinftitle.textContent = "";
          chestinfcontent.textContent = "";
          if(!Number.isNaN(chestinput.value)){
            var movenumber = Number(chestinput.value);
            if(movenumber > thing[i].number){
              givechest(thing[i].name);
              if(able == 1){
                for(var j=1;j<thing[i].number;j++){
                  givechest(thing[i].name);
                }
                thing[i].number = 0;
              }
            }
            else if(movenumber >0){
              givechest(thing[i].name);
              if(able == 1){
                for(var j=1;j<movenumber;j++){
                  givechest(thing[i].name);
                }
                thing[i].number = thing[i].number - movenumber;
              }
            }
          }
          rechest();
        }
      }
    }
    else if(!thinglist[thing[i].name] || thing[i].number < 1){
      thing[i].name = "";
      thing[i].number = 0;
      chestpackagebuttonimg[i].src = "../picture/nothing.webp";
    }
    else{
      chestpackagebuttonimg[i].src = "../picture/nothing.webp";
    }
  }
}

function givechest(x){
  able = 0;
  for(var i=0;i<21;i++){
  if(chestthing[i].name == x){
    able = 1;
    chestthing[i].number++;
    rechest();
    break;
    }
  }
  if(able == 0){
    for(var i=0;i<21;i++){
    if(chestthing[i].name == ""){
      able = 1;
      chestthing[i].name = x;
      chestthing[i].number = 1;
      rechest();
      break;
      }
    }
  }
  if(able == 0){
    listofevent.push(4);
  }
}
redraw();
