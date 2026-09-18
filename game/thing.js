thinglist = {
  feiz: {
    img: "../picture/feiz.webp",
    inftitle: {v:"[]", c:"菲斯帽", l:"[vesu]teme"},
    infcontent: {v:"[].",c:"一个来自土耳其的非常好看的帽子。",l:"pa tustenon teme jakus [tuki]."},
    code: ()=>{
        hat = "feiz";
      }
    },
  coffee: {
    img: "../picture/c20.webp",
    inftitle: {v:"[]",c:"咖啡",l:"kohi"},
    infcontent: {v:",.",c:"有用的饮料，可以让我们更清醒。",l:"lenon lahi, kualen jo san kanlosnon."},
    code: ()=>{
      thirsty = thirsty + 120;
      sleepy = sleepy + 60;
    }
  }
}