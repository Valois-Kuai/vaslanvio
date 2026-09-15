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
  canvas.fillRect(0.37*width-6,(0.56+6/50)*height-8,12,16);
  //箱子AO
  canvas.beginPath();
  canvas.moveTo(0.22*width,(0.7+6/50)*height);
  canvas.lineTo(0.52*width,(0.7+6/50)*height);
  canvas.lineTo(0.6*width,0.7*height);
  canvas.lineWidth=8;
  canvas.strokeStyle="rgba(0,0,0,0.05)";
  canvas.stroke();
  //床
  canvas.beginPath();
  canvas.
}

replace();
redraw();
