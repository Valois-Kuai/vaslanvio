var repage = document.createElement("button");
repage.id = "repage";
document.body.appendChild(repage);
repage.textContent = "回到主页";

var blackdiv = document.createElement("div");
blackdiv.id = "blackdiv";
document.body.appendChild(blackdiv);

var whitediv = document.createElement("div");
whitediv.id = "whitediv";
document.body.appendChild(whitediv);

repage.onclick=()=>{
    whitediv.style.animation = "white 0.5s ease-out forwards";
    setTimeout(()=>{window.location.href="./main.html"},500);
}

blackdiv.style.animation = "blackin 0.5s ease-in forwards";

var input = document.createElement("input");
input.type = "text";
input.id = "input";
document.body.appendChild(input);
var search = document.createElement("button");
search.id = "search";
search.textContent = "搜索";
document.body.appendChild(search);

var tablediv = document.createElement("div");
tablediv.id = "tablediv";
document.body.appendChild(tablediv);

var attention = document.createElement("div");
attention.id = "attention";
document.body.appendChild(attention);

attention.innerHTML = "注意：目前词汇表为v1.6版本<br/>该词汇表不严格按照首字母排序";

var latindiv = [];


var vaslanviodiv = [];

var meandiv = [];


var onediv = [];
function reword(){
    tablediv.innerHTML = "";
    for(let i in word){
        if(Object.keys(word[i]).filter(key => word[i][key].includes(input.value)).length > 0){
            onediv[Number(i)] = document.createElement("div");
            onediv[Number(i)].className = "onediv";
            tablediv.appendChild(onediv[Number(i)]);
            latindiv[Number(i)] = document.createElement("div");
            latindiv[Number(i)].className = "latindiv";
            latindiv[Number(i)].textContent = word[i].latin;
            onediv[Number(i)].appendChild(latindiv[Number(i)]);
            vaslanviodiv[Number(i)] = document.createElement("div");
            vaslanviodiv[Number(i)].className = "vaslanviodiv";
            vaslanviodiv[Number(i)].innerHTML = word[i].vaslanvio;
            onediv[Number(i)].appendChild(vaslanviodiv[Number(i)]);
            meandiv[Number(i)] = document.createElement("div");
            meandiv[Number(i)].className = "meandiv";
            meandiv[Number(i)].textContent = word[i].mean;
            onediv[Number(i)].appendChild(meandiv[Number(i)]);
        }
    } 
}
reword();

search.onclick = ()=>{
    reword();
}