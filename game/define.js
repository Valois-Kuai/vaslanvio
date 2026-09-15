const e = {};
document.querySelectorAll('[id]').forEach(el => e[el.id] = el);  //看不懂です

var place = localStorage.getItem("place");
var width= window.innerWidth;
var height= window.innerHeight;
var state = localStorage.getItem("state");

window.addEventListener('resize',()=>{
  width = window.innerWidth;
  height = window.innerHeight;
  e.canvas.width = width;
  e.canvas.height = height;
  redraw();
});

function replace(){
  place = localStorage.getItem("place");
  if(place==null || place=="undefined"){
    place = "room";
  }
  if(place!=null){
    if (!location.pathname.endsWith(`/${place}.html`)) {
      window.location.href = `${place}.html`;
    }
  }
}

function safe(){
  localStorage.setItem("place",place)
  localStorage.setItem("state",state)
}