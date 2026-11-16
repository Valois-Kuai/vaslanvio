var state = "t";

var output = document.createElement("textarea");
output.id = "output";
document.body.appendChild(output);
output.inputMode = "none";

var inputbox = document.createElement("div");
inputbox.id = "inputbox";
document.body.appendChild(inputbox);


var inputboxline = [];
var inputbutton = [];
for(var i=0; i<5; i++){
    inputboxline[i] = document.createElement("div");
    inputboxline[i].className = "inputboxline";
    inputbox.appendChild(inputboxline[i]);
    inputbutton[i] = [];
    for(var j=0;j<8;j++){
        inputbutton[i][j] = document.createElement("button");
        inputbutton[i][j].className = "inputbutton";
        inputboxline[i].appendChild(inputbutton[i][j]);
    }
}

inputbutton[0][1].disabled = true;
inputbutton[0][2].disabled = true;
inputbutton[0][3].disabled = true;
inputbutton[0][4].disabled = true;
inputbutton[0][5].disabled = true;
inputbutton[0][6].disabled = true;
inputbutton[2][7].disabled = true;
inputbutton[3][7].disabled = true;

function restate(){
    for(var i=0; i<5; i++){
        for(var j=0;j<8;j++){
            inputbutton[i][j].textContent = "";
        }
    }
    for(let i=1; i<4;i++){
        for(let j=1;j<7;j++){
            inputbutton[i][j].onclick = "";
        }
    }

    inputbutton[0][0].textContent = "[,.!012";
    inputbutton[1][0].textContent = "t";
    inputbutton[2][0].textContent = "v";
    inputbutton[3][0].textContent = "h";
    inputbutton[4][0].textContent = "l";
    inputbutton[4][1].textContent = "m";
    inputbutton[4][2].textContent = "n";
    inputbutton[4][3].textContent = "p";
    inputbutton[4][4].textContent = "s";
    inputbutton[4][5].textContent = "k";
    inputbutton[4][6].textContent = "j";
    inputbutton[0][1].textContent = "a";
    inputbutton[0][2].textContent = "i";
    inputbutton[0][3].textContent = "u";
    inputbutton[0][4].textContent = "e";
    inputbutton[0][5].textContent = "o";
    inputbutton[0][6].textContent = "y";
    inputbutton[0][7].textContent = "⇐";
    inputbutton[2][7].textContent = "n";
    inputbutton[3][7].textContent = "s";
    inputbutton[1][7].textContent = "↵";
    inputbutton[4][7].textContent = "空格";

    
    inputbutton[0][0].style.opacity = 1;
    inputbutton[1][0].style.opacity = 1;
    inputbutton[2][0].style.opacity = 1;
    inputbutton[3][0].style.opacity = 1;
    inputbutton[4][0].style.opacity = 1;
    inputbutton[4][1].style.opacity = 1;
    inputbutton[4][2].style.opacity = 1;
    inputbutton[4][3].style.opacity = 1;
    inputbutton[4][4].style.opacity = 1;
    inputbutton[4][5].style.opacity = 1;
    inputbutton[4][6].style.opacity = 1;

    inputbutton[0][0].onclick = () => {state = "punctuation";restate();}
    inputbutton[1][0].onclick = () => {state = "t";restate();}
    inputbutton[2][0].onclick = () => {state = "v";restate();}
    inputbutton[3][0].onclick = () => {state = "h";restate();}
    inputbutton[4][0].onclick = () => {state = "l";restate();}
    inputbutton[4][1].onclick = () => {state = "m";restate();}
    inputbutton[4][2].onclick = () => {state = "n";restate();}
    inputbutton[4][3].onclick = () => {state = "p";restate();}
    inputbutton[4][4].onclick = () => {state = "s";restate();}
    inputbutton[4][5].onclick = () => {state = "k";restate();}
    inputbutton[4][6].onclick = () => {state = "j";restate();}
    
    if(state == "t"){
        inputbutton[1][0].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][1].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][2].textContent = "";
        inputbutton[3][3].textContent = "";
        inputbutton[3][5].textContent = "";
        inputbutton[2][3].textContent = "";
        inputbutton[2][6].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    //以下九个辅音都是AI替我完成了硬编码的工作，感谢DeepSeek
    if(state == "v"){
        inputbutton[2][0].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][2].textContent = "";
        inputbutton[3][5].textContent = "";
        inputbutton[3][6].textContent = "";
        inputbutton[2][3].textContent = "";
        inputbutton[2][6].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "h"){
        inputbutton[3][0].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[2][6].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "l"){
        inputbutton[4][0].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][1].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][2].textContent = "";
        inputbutton[3][3].textContent = "";
        inputbutton[3][5].textContent = "";
        inputbutton[3][6].textContent = "";
        inputbutton[2][3].textContent = "";
        inputbutton[2][6].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "m"){
        inputbutton[4][1].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "n"){
        inputbutton[4][2].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[2][1].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][2].textContent = "";
        inputbutton[3][3].textContent = "";
        inputbutton[3][5].textContent = "";
        inputbutton[2][3].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "p"){
        inputbutton[4][3].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][1].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[2][3].textContent = "";
        inputbutton[3][4].textContent = "";
        inputbutton[3][6].textContent = "'";
    }
    if(state == "s"){
        inputbutton[4][4].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][1].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][2].textContent = "";
        inputbutton[3][3].textContent = "";
        inputbutton[3][5].textContent = "";
        inputbutton[3][6].textContent = "";
        inputbutton[2][3].textContent = "";
        inputbutton[2][6].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "k"){
        inputbutton[4][5].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][2].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[1][6].textContent = "";
        inputbutton[2][1].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][2].textContent = "";
        inputbutton[3][3].textContent = "";
        inputbutton[3][5].textContent = "";
        inputbutton[3][6].textContent = "";
        inputbutton[2][3].textContent = "";
        inputbutton[2][6].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "j"){
        inputbutton[4][6].style.opacity = 0.8;
        inputbutton[1][1].textContent = "";
        inputbutton[1][3].textContent = "";
        inputbutton[1][4].textContent = "";
        inputbutton[1][5].textContent = "";
        inputbutton[2][1].textContent = "";
        inputbutton[2][2].textContent = "";
        inputbutton[2][4].textContent = "";
        inputbutton[2][5].textContent = "";
        inputbutton[3][1].textContent = "";
        inputbutton[3][3].textContent = "";
        inputbutton[3][5].textContent = "";
        inputbutton[3][4].textContent = "";
    }
    if(state == "punctuation"){
        inputbutton[0][0].style.opacity = 0.8;
        inputbutton[1][2].textContent = "[";
        inputbutton[1][3].textContent = "]";
        inputbutton[2][2].textContent = "(";
        inputbutton[2][3].textContent = ")";
        inputbutton[1][1].textContent = ",";
        inputbutton[2][1].textContent = ".";
        inputbutton[3][1].textContent = "!";
        inputbutton[1][4].textContent = "7";
        inputbutton[1][5].textContent = "8";
        inputbutton[1][6].textContent = "9";
        inputbutton[2][4].textContent = "4";
        inputbutton[2][5].textContent = "5";
        inputbutton[2][6].textContent = "6";
        inputbutton[3][4].textContent = "1";
        inputbutton[3][5].textContent = "2";
        inputbutton[3][6].textContent = "3";
        inputbutton[3][3].textContent = "0";
        inputbutton[3][2].textContent = "'";
    }

    for(let i=1;i<4;i++){
        for(let j=1;j<7;j++){
            inputbutton[i][j].onclick = () => {
                if(inputbutton[i][j].textContent){
                    output.focus();
                    output.setRangeText(inputbutton[i][j].textContent, output.selectionStart, output.selectionEnd, "end")
                }
            };
        }
    }
    inputbutton[0][7].onclick = () => {
        if(output.selectionStart-1 >= 0){
            output.focus();
            if(output.selectionStart == output.selectionEnd){
                output.setRangeText("", output.selectionStart-1, output.selectionEnd, "end");
            }
            else{
                output.setRangeText("", output.selectionStart, output.selectionEnd, "end");
            }
        }
        else if(output.selectionStart != output.selectionEnd){
            output.setRangeText("", output.selectionStart, output.selectionEnd, "end");
        }
    }
    inputbutton[1][7].onclick = () => {
        if(output.selectionStart == output.selectionEnd){
            output.focus();
            output.setRangeText("\n", output.selectionStart, output.selectionEnd, "end");
        }
    }
    inputbutton[4][7].onclick = () => {
        output.focus();
        output.setRangeText(" ", output.selectionStart, output.selectionEnd, "end")
    }

}

restate();

var p = document.createElement("p");
p.textContent = "由于缺少io,ion和ua的位置，因此用un,yn和es的位置代替。"
document.body.appendChild(p);




