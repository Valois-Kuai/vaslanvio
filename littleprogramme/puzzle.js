const e = {};
document.querySelectorAll('[id]').forEach(el => e[el.id] = el);  //看不懂です

var floor = Number(localStorage.getItem("floor"));
var brick = Number(localStorage.getItem("brick"));

e.repage.onclick = ()=>{
    e.black.style.animation = "maskin ease-in 0.5s forwards";
    setTimeout(()=>{window.location.href="../main.html"},500);
}

function renumber(){
    e.floor.textContent = `目前你已经搭建了${floor}层`;
    e.brick.textContent = `现在你有${brick}个砖块`;
    localStorage.setItem("brick",brick);
    localStorage.setItem("floor",floor);
}

renumber();

var allnumber = Object.keys(puzzle).length;
var puzzletext;
var puzzlechoicediv;
var puzzlechoice = [];
var next;
var result;

result = document.createElement("p");
result.id = "result";

next = document.createElement("button");
next.textContent = "下一题";
next.id = "next";
next.style.display = "none";
next.onclick = ()=>{
    repuzzle();
    next.style.display = "none";
    result.style.display="none";
}




function shuffle(a){
    for(let i = a.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
}

function rebuild(randomkey){
        puzzletext = document.createElement("p");
        puzzletext.id = "puzzletext"
        puzzletext.textContent = puzzle[randomkey].text;
        e.puzzlediv.appendChild(puzzletext);
        var choicelist = shuffle(Object.keys(puzzle[randomkey].choice));
        puzzlechoice = [];
        for(let i =0; i<Object.keys(puzzle[randomkey].choice).length;i++){
            puzzlechoice[i] = document.createElement("button");
            puzzlechoice[i].className = "puzzlechoice";
            e.puzzlediv.appendChild(puzzlechoice[i]);
            puzzlechoice[i].textContent = puzzle[randomkey].choice[choicelist[i]]
            if(choicelist[i] == "0"){
                puzzlechoice[i].onclick = ()=> {
                    brick++;
                    for(let i=0;i<Object.keys(puzzle[randomkey].choice).length;i++){
                        if(choicelist[i] == "0"){
                            puzzlechoice[i].style.background = "#D8EADB";
                        }
                        else{
                            puzzlechoice[i].style.background = "#F4E3E1";
                        }
                    }
                    result.textContent = "你答对了"
                    result.style.display = "";
                    next.style.display = "";
                    renumber();
                }  
            }
            else{
                puzzlechoice[i].onclick = ()=> {
                    for(let i=0;i<Object.keys(puzzle[randomkey].choice).length;i++){
                        if(choicelist[i] == "0"){
                            puzzlechoice[i].style.background = "#D8EADB";
                        }
                        else{
                            puzzlechoice[i].style.background = "#F4E3E1";
                        }
                    }
                    result.textContent = "这是错误的";
                    result.style.display = "";
                    next.style.display = "";
                } 
            }
            
        }
        e.puzzlediv.appendChild(result);
        e.puzzlediv.appendChild(next);
}

function repuzzle(){
    var randomkey = Math.floor(Math.random()*allnumber);
    if(!puzzletext){
        rebuild(randomkey);
    }
    else{
        e.puzzlediv.style.animation = "slideout 0.5s ease-in-out forwards";
        setTimeout(()=>{
        e.puzzlediv.textContent = "";
        rebuild(randomkey);
        e.puzzlediv.style.animation = "slidein 0.5s ease-in-out forwards";
        },500)
    }
}



function refloor(){
    var floorneed = Math.floor(5 + 10*Math.log((floor+1)));
    e.build.textContent = `建造下一层：${floorneed}个砖块`;
    e.build.onclick = ()=>{
        if(brick >= floorneed){
            brick = brick - floorneed;
            floor++;
            refloor();
            redraw();
            renumber();
        }
    }
}

var cvs = e.babel.getContext("2d");

function redraw(){
    e.babel.width = e.babeldiv.clientWidth;
    e.babel.height = e.babeldiv.clientHeight*(1+floor)/3;
    e.babel.style.height = e.babel.height + "px";
    var width = e.babel.width;
    var height = e.babel.height;
    var floorheight = e.babeldiv.clientHeight/3
    if(floor != 0){
        for(let i=1; i<=floor;i++){
            cvs.beginPath();
            cvs.moveTo(0.2*width,i*floorheight);
            cvs.lineTo(0.8*width,i*floorheight);
            cvs.lineTo(0.8*width,(i+1)*floorheight);
            cvs.lineTo(0.2*width,(i+1)*floorheight);
            cvs.closePath();
            cvs.fillStyle = `rgb(${139+Math.random()*10-5}, ${69+Math.random()*10-5}, ${19+Math.random()*10-5})`;
            cvs.fill();
            cvs.stroke();
            
        }
        cvs.beginPath();
        cvs.moveTo(0,height);
        cvs.lineTo(width,height);
        cvs.stroke();
    }
}

repuzzle();
refloor();
redraw();