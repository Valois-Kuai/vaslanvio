const e = {};
document.querySelectorAll('[id]').forEach(el => e[el.id] = el);  //看不懂です

var place = localStorage.getItem("place");var width= window.innerWidth;
var height= window.innerHeight;var state = 0;
var time = localStorage.getItem("time");var hungry = localStorage.getItem("hungry");
var thirsty = localStorage.getItem("thirsty");var sleepy = localStorage.getItem("sleepy");
var timego = 1;var event = 0;
var listofevent = [];var thing = JSON.parse(localStorage.getItem("thing"));

var pointing;
var eventmain;var eventdiv;var eventtitle;var eventcontent;var eventchoose = [];
var timer;
var packagediv;var packagemain;var packagetitle;var packagevasdiv;var packagethingdiv;var packagethingmain;
var packagecontent;
var hatdiv;var thingdiv = [];
var vasstatediv;
var vasstate = [];
var usedel;
var use;var del;var inf; //information
var inftitle; var infcontent;
var closepackage;
var hat = localStorage.getItem("hat");
var able = 0;
var hatimg;
var thingimg = [];
var thingnumber = [];
var vsl = "v"; //vasstatelanguage

if(hat == null || hat == "null"){
  hat = "feiz";
}

if(hungry == null || hungry == "null"){
  hungry = 1440;
}
if(thirsty == null || thirsty == "null"){
  thirsty = 1440;
}
if(sleepy == null || sleepy == "null"){
  sleepy = 960;
}
if(thing == null || thing == "null"){
  thing = {
    0: {name: "", number: 0},
    1: {name: "", number: 0},
    2: {name: "", number: 0},
    3: {name: "", number: 0},
  }
}


function retime(){
  if(time == "null" || time == null){
    time = 480;
  }
  while(time>=1440){
    time=time-1440;
  }
  var hour = Math.floor(time / 60);
  var minute = Math.floor(time % 60);
  e.time.value=`${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}`;
  if(listofevent.length === 0){
    event = 0;
  }
  else{
    event = listofevent[0];
  }
  if(event != 0){
    if(!eventdiv){
      eventmain = document.createElement("button");
      eventmain.type= "button";
      eventmain.style.position = "relative";
      eventmain.style.zIndex = 7;
      eventmain.style.backgroundColor = "#F5F2EC";
      eventmain.style.fontSize = "calc(0.6*var(--tenvys))";
      eventmain.style.width = "calc(8*var(--tenvys))";
      eventdiv = document.createElement("div");
      eventdiv.appendChild(eventmain);
      eventdiv.style.position = "fixed";
      eventdiv.style.width = "100%";
      eventdiv.style.height = "100%";
      eventdiv.style.zIndex = 6;
      eventdiv.style.backgroundColor = "rgba(0,0,0,0.2)";
      eventmain.style.fontFamily = "vaslanvio";
      eventmain.style.border = "4px solid black";
      eventmain.style.pointerEvents = "none";
      document.body.appendChild(eventdiv);
      eventtitle = document.createElement("span");
      eventcontent = document.createElement("span");
      eventmain.appendChild(eventtitle);
      eventmain.appendChild(eventcontent);
      eventtitle.textContent = eventlist[event].title.v;
      eventcontent.textContent = eventlist[event].content.v;
      eventtitle.style.maxWidth = "100%";
      eventtitle.style.wordBreak = "break-word";
      eventcontent.style.maxWidth = "100%";
      eventcontent.style.wordBreak = "break-word";
      eventtitle.style.display = "block";
      eventcontent.style.display = "block";
      eventtitle.style.textAlign = "center";
      eventcontent.style.textAlign = "left";
      eventcontent.style.whiteSpace = "normal";
      eventtitle.style.fontSize = "calc(0.8*var(--tenvys))";
      eventchoose = [];
      for(let i=0;i<eventlist[event].n;i++){
        eventchoose[i] = document.createElement("button");
        eventchoose[i].style.display = "block";
        eventchoose[i].style.textAlign = "center";
        eventchoose[i].textContent = eventlist[event].c[i].v;
        eventchoose[i].style.maxWidth = "100%";
        eventchoose[i].style.wordBreak = "break-word";
        eventdiv.appendChild(eventchoose[i]);
        eventchoose[i].style.fontFamily = "vaslanvio";
        eventchoose[i].style.position = "relative";
        eventchoose[i].style.zIndex = 5;
        eventchoose[i].style.backgroundColor = "white";
        eventchoose[i].style.fontSize = "calc(0.6*var(--tenvys))";
        eventchoose[i].style.width = "calc(8*var(--tenvys))";
        eventchoose[i].style.border = "4px solid black";
        eventchoose[i].onclick = ()=>{
          eventlist[event].c[i].code();
          timego = 1;
          listofevent.shift();
          eventdiv.remove();
          eventdiv = null;
          clearTimeout(timer);
          retime();
        }
      }
      eventdiv.style.display = "flex";
      eventdiv.style.flexDirection = "column";
      eventdiv.style.alignItems = "center";
      eventdiv.style.justifyContent = "center";
    }
    timego = 0;
  }
  
  //console.log(time);
  //console.log(hungry);
  //console.log(thirsty);
  //console.log(sleepy);
  timer = setTimeout(()=>{
    if(state == "showpackage"){
      restate();
    }
    if(timego == 1 && event == 0){
      time++;
      hungry--;
      thirsty--;
      sleepy--;
    }
    retime();},1000);
}


window.addEventListener('resize',()=>{
  width = window.innerWidth;
  height = window.innerHeight;
  e.canvas.width = width;
  e.canvas.height = height;
  redraw();
});

function replace(){
  place = localStorage.getItem("place");
  if(place==null || place=="undefined" || place=="null"){
    place = "room";
  }
  if(place!=null){
    if (!location.pathname.endsWith(`/${place}.html`)) {
      window.location.href = `${place}.html`;
    }
  }
}

function safe(){
  localStorage.setItem("place",place);
  localStorage.setItem("time",time);
  localStorage.setItem("hungry",hungry);
  localStorage.setItem("thirsty",thirsty);
  localStorage.setItem("sleepy",sleepy);
  localStorage.setItem("thing",JSON.stringify(thing));
  localStorage.setItem("hat",hat);
}

retime();
replace();

e.mask.style.animation="maskoff 0.5s ease-out forwards";

e.return.onclick = () =>{
  e.mask.style.animation="maskon 0.5s ease-in forwards";
  setTimeout(()=>{window.location.href="../main.html"},500);
}

function give(x){
  able = 0;
  for(var i=0;i<4;i++){
  if(thing[i].name == x){
    able = 1;
    thing[i].number++;
    reitem();
    break;
    }
  }
  if(able == 0){
    for(var i=0;i<4;i++){
    if(thing[i].name == ""){
      able = 1;
      thing[i].name = x;
      thing[i].number = 1;
      reitem();
      break;
      }
    }
  }
  if(able == 0){
    listofevent.push(3);
  }
}

function reitem(){
  use.onclick = ()=>{};
  del.onclick = ()=>{};
  if(hatdiv){
    if(hat != 0){
    hatdiv.style.pointerEvents = "";
    if(!hatimg){
      hatimg = document.createElement("img");
      hatdiv.appendChild(hatimg);
    }
    
    hatimg.id = "hatimg";
    hatimg.alt = "无法加载图片";
    hatimg.src = thinglist[hat].img;
    
    hatdiv.onclick=()=>{
      if(inftitle){
        inftitle.textContent = "";
      }
      else{
        inftitle = document.createElement("div");
      }
      if(infcontent){
        infcontent.textContent = "";
      }
      else{
        infcontent = document.createElement("div");
      }
      inftitle.id = "inftitle";
      inftitle.textContent = thinglist[hat].inftitle.v;
      inf.appendChild(inftitle);
      infcontent.id = "infcontent";
      infcontent.textContent = thinglist[hat].infcontent.v;
      inf.appendChild(infcontent);
      use.textContent = ""; //take off
      use.onclick = () =>{
        give(hat);
        if(able == 1){
          hat = 0;
        }
        inftitle.textContent="";
        infcontent.textContent="";
        reitem();
      }
      del.onclick = () =>{
        hat = 0;
        inftitle.textContent="";
        infcontent.textContent="";
        reitem();
      }
    }
  }
    else{
    hatdiv.style.pointerEvents = "none";
    if(hatimg){
      hatimg.src = "../picture/nothing.webp";
    }
}
  }
  if(packagethingdiv){
    for(let i=0;i<4;i++){
      if(thing[i].name != "" && thing[i].number >0 && thinglist[thing[i].name]){
        thingdiv[i].style.pointerEvents = "";
        if(!thingimg[i]){
          thingimg[i] = document.createElement("img");
          thingdiv[i].appendChild(thingimg[i]);
        }
        if(!thingnumber[i]){
          thingnumber[i] = document.createElement("div");
          thingnumber[i].className = "thingnumber";
          thingdiv[i].appendChild(thingnumber[i]);
        }
        
        thingimg[i].alt = "无法加载图片";
        thingimg[i].className = "thingimg";
        thingimg[i].src = thinglist[thing[i].name].img;
        if(thing[i].number >1){
          thingnumber[i].textContent = thing[i].number;
        }
        else{
          thingnumber[i].textContent = "";
        }
        thingdiv[i].onclick=()=>{
          if(inftitle){
            inftitle.textContent = "";
          }
          else{
            inftitle = document.createElement("div");
          }
          if(infcontent){
            infcontent.textContent = "";
          }
          else{
            infcontent = document.createElement("div");
          }
          inftitle.id = "inftitle";
          inftitle.textContent = thinglist[thing[i].name].inftitle.v;
          inf.appendChild(inftitle);
          infcontent.id = "infcontent";
          infcontent.textContent = thinglist[thing[i].name].infcontent.v;
          inf.appendChild(infcontent);
          use.textContent = "";
          use.onclick = () =>{
            thinglist[thing[i].name].code();
            inftitle.textContent="";
            infcontent.textContent="";
            thing[i].number--;
            reitem();
            restate();
          }
          del.onclick = () =>{
            inftitle.textContent="";
            infcontent.textContent="";
            thing[i].number--;
            reitem();
          }
        }
      }
      else if(thing[i].number <1 || !thinglist[thing[i].name]){
        thingdiv[i].style.pointerEvents = "none";
        if(thingimg[i]){
          thingimg[i].src = "../picture/nothing.webp";
        }
        thing[i].name = "";
        thing[i].number = 0;
      }
    }
  }
}

function restate(){
  if(hungry > 1440){
    hungry = 1440;
  }
  if(thirsty > 1440){
    thirsty = 1440;
  }
  if(sleepy > 960){
    sleepy = 960;
  }
  if(packagediv){
    if(!vasstatediv){
      vasstatediv = document.createElement("div");
      vasstatediv.id = "vasstatediv";
      packagevasdiv.appendChild(vasstatediv);
      for(let i=0;i<3;i++){
        vasstate[i] = document.createElement("div");
        vasstate[i].className = "vasstate";
        vasstatediv.appendChild(vasstate[i]);
      }
    }
    if(vsl == "v"){
      vasstate[0].textContent = `:${(100*hungry/1440).toFixed(1)}%`;
      vasstate[1].textContent = `:${(100*thirsty/1440).toFixed(1)}%`;
      vasstate[2].textContent = `:${(100*sleepy/960).toFixed(1)}%`;
    }
    if(vsl == "c"){
      vasstate[0].textContent = `饥饿值:${(100*hungry/1440).toFixed(1)}%`;
      vasstate[1].textContent = `口渴值:${(100*thirsty/1440).toFixed(1)}%`;
      vasstate[2].textContent = `困倦值:${(100*sleepy/960).toFixed(1)}%`;
    }
    if(vsl == "l"){
      vasstate[0].textContent = `lalionvys:${(100*hungry/1440).toFixed(1)}%`;
      vasstate[1].textContent = `lahilionvys:${(100*thirsty/1440).toFixed(1)}%`;
      vasstate[2].textContent = `kinlosvys:${(100*sleepy/960).toFixed(1)}%`;
    }
  }
}

function repackage(){
  if(packagediv){
    packagediv.remove();
    packagediv = null;
  }
  state = "showpackage";
  packagediv = document.createElement("div");
  packagediv.id = "packagediv";
  document.body.appendChild(packagediv);
  packagemain = document.createElement("div");
  packagemain.id = "packagemain";
  packagediv.appendChild(packagemain);
  packagetitle = document.createElement("div");
  packagetitle.id = "packagetitle";
  packagetitle.textContent = "";
  packagemain.appendChild(packagetitle);
  closepackage = document.createElement("button");
  closepackage.id = "closepackage";
  closepackage.textContent = "";
  packagemain.appendChild(closepackage);
  closepackage.onclick=()=>{
    state = 0;
    packagediv.remove();
    packagediv = null;
  }
  packagecontent = document.createElement("div");
  packagecontent.id = "packagecontent";
  packagemain.appendChild(packagecontent);
  packagevasdiv = document.createElement("div");
  packagevasdiv.id = "packagevasdiv";
  packagecontent.appendChild(packagevasdiv);
  packagethingdiv = document.createElement("div");
  packagethingdiv.id = "packagethingdiv";
  packagecontent.appendChild(packagethingdiv);
  hatdiv = document.createElement("button");
  hatdiv.id = "hatdiv";
  packagevasdiv.appendChild(hatdiv);
  packagethingmain = document.createElement("div");
  packagethingmain.id = "packagethingmain";
  packagethingdiv.appendChild(packagethingmain);
  for(let i =0;i<4;i++){
    thingdiv[i] = document.createElement("button");
    thingdiv[i].className = "thingdiv";
    packagethingmain.appendChild(thingdiv[i]);
  }
  inf = document.createElement("div");
  inf.id = "inf";
  packagethingdiv.appendChild(inf);
  usedel = document.createElement("div");
  usedel.id = "usedel";
  packagethingdiv.appendChild(usedel);
  use = document.createElement("button");
  use.id ="use";
  use.textContent = "";
  usedel.appendChild(use);
  del = document.createElement("button");
  del.id = "del";
  del.textContent = "";
  usedel.appendChild(del);
  var vas = document.createElement("img");
  vas.id = "vas";
  vas.alt = "图片无法加载";
  vas.src = "../picture/vas.webp";
  vas.style.pointerEvents = "none";
  packagevasdiv.appendChild(vas);
  reitem();
  restate();
}



e.package.onclick = () =>{
  if(event == 0 && state == 0){
    repackage();
  }
}

document.addEventListener("pointerdown",(evt)=>{
  pointing = evt.target;
  if(pointing == e.chinese){
    if(place == "room"){
      e.goout.value="出门";
      e.chest.value="箱子";
      e.sleep.value="睡觉";
      e.package.value="背包";
    }
    if(packagediv){
      packagetitle.textContent = "背包";
      for(var key in thinglist){
        if(inftitle){
          if(inftitle.textContent == thinglist[key].inftitle.v){
            inftitle.textContent = thinglist[key].inftitle.c;
            infcontent.textContent = thinglist[key].infcontent.c;
          }
        }
        
      }
      if(use.textContent == ""){
        use.textContent = "脱下";
      }
      else{
        use.textContent = "使用";
      }
      del.textContent = "删除";
      vsl = "c";
      restate();
    }
    if(event != 0){
      eventtitle.textContent = eventlist[event].title.c;
      eventcontent.textContent = eventlist[event].content.c;
      for(var i=0;i<eventchoose.length;i++){
        eventchoose[i].textContent = eventlist[event].c[i].c;
      }
    }
  }
  if(pointing == e.latin){
    if(place == "room"){
      e.goout.value="mualos";
      e.chest.value="tuavio";
      e.sleep.value="kinlos";
      e.package.value="vytua";
    }
    if(packagediv){
      packagetitle.textContent = "vytua";
      for(var key in thinglist){
      if(inftitle){
        if(inftitle.textContent == thinglist[key].inftitle.v){
          inftitle.textContent = thinglist[key].inftitle.l;
          infcontent.textContent = thinglist[key].infcontent.l;
        }
      }
        
      }
      if(use.textContent == ""){
        use.textContent = "masjamy";
      }
      else{
        use.textContent = "le";
      }
      del.textContent = "kinlunua";
      vsl = "l";
      restate();
    }
    if(event != 0){
      eventtitle.textContent = eventlist[event].title.l;
      eventcontent.textContent = eventlist[event].content.l;
      for(var i=0;i<eventchoose.length;i++){
        eventchoose[i].textContent = eventlist[event].c[i].l;
      }
    }
  }
})

document.addEventListener("pointerup",(evt)=>{
  if(pointing == e.chinese || pointing == e.latin){
    if(place == "room"){
      e.goout.value="";
      e.chest.value="";
      e.sleep.value="";
      e.package.value="";
    }
    if(packagediv){
      packagetitle.textContent = "";
      for(var key in thinglist){
        if(inftitle){
          if(inftitle.textContent == thinglist[key].inftitle.c ||inftitle.textContent == thinglist[key].inftitle.l){
            inftitle.textContent = thinglist[key].inftitle.v;
            infcontent.textContent = thinglist[key].infcontent.v;
          }
        }
        
      }
      if(use.textContent == "脱下" || use.textContent == "masjamy"){
        use.textContent = "";
      }
      else{
        use.textContent = "";
      }
      del.textContent = "";
      vsl = "v";
      restate();
    }
    if(event != 0){
      eventtitle.textContent = eventlist[event].title.v;
      eventcontent.textContent = eventlist[event].content.v;
      for(var i=0;i<eventchoose.length;i++){
        eventchoose[i].textContent = eventlist[event].c[i].v;
      }
    }
  }
})