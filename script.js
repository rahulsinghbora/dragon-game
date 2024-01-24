const man = document.querySelector(".man")
const dragon = document.querySelector(".obstacle")
const over = document.querySelector(".gameover")
let scorecard= document.querySelector(".score")


let cross =true
let score =0

document.onkeydown = (e) => {
    console.log("key code is", e.keyCode);
    if (e.keyCode == 38) {
        man.classList.add("animateMan");
        setTimeout(() => {
            man.classList.remove("animateMan")
        }, 800)
    }

    if(e.keyCode==39){
        manX=parseInt(window.getComputedStyle(man, null).getPropertyValue("left"));
        man.style.left=manX+100+"px"
    }
    if(e.keyCode==37){
        manX=parseInt(window.getComputedStyle(man, null).getPropertyValue("left"));
        man.style.left=manX-100+"px"
    }
}
setInterval(() => {
    dx = parseInt(window.getComputedStyle(man, null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(man, null).getPropertyValue("top"))

    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"))

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX);

    if (offsetX < 70 && offsetY < 70) {
        over.style.visibility = "visible";
        scorecard.classList.add("over")
        dragon.classList.remove("obstacleAni")
    }
    else if(offsetX<145 && cross){
     score+=1;
     updates(score)
     cross =false;
     setTimeout(()=>{
       cross=true
     },1000)
    }


}, 10);

  function updates(score){
   scorecard.innerHTML= " your score : "+score
}