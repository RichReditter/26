const canvas = document.body.querySelector('#canvas')
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight
let ctx = canvas.getContext('2d')

// ctx.lineWidth = 3

let christmasTree = function(x,y){
    ctx.beginPath();
    ctx.fillStyle = 'green'
    ctx.moveTo(x+50, y+50);
    ctx.lineTo(x+25,y+100)
    ctx.lineTo(x+75,y+100)
    ctx.lineTo(x+50, y+50);
    ctx.fill()
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = 'green'
    ctx.moveTo(x+50,y+70)
    ctx.lineTo(x+20,y+120)
    ctx.lineTo(x+80,y+120)
    ctx.lineTo(x+50,y+70)
    ctx.fill()
    ctx.closePath()
    
    ctx.beginPath();
    ctx.fillStyle = 'green'
    ctx.moveTo(x+50,y+80)
    ctx.lineTo(x+15,y+150)
    ctx.lineTo(x+85,y+150)
    ctx.lineTo(x+50,y+80)
    ctx.fill()
    ctx.closePath()
    
    ctx.beginPath()
    ctx.fillStyle = 'brown'
    ctx.moveTo(x+45,y+140)
    ctx.lineTo(x+45,y+165)
    ctx.lineTo(x+55,y+165)
    ctx.lineTo(x+55,y+140)
    ctx.closePath()
    ctx.fill()
}

const amount = +prompt('Сколько деревьев желаете?')
let i = 0;
while(i<amount){
    const randomX = Math.random()*2400
    const randomY = Math.random()*1500
    christmasTree(randomX,randomY)
    i++;
}

function drawStar(cx,cy,spikes,outerRadius,innerRadius){
    let rot=Math.PI/2*3;
    let x=cx;
    let y=cy;
    let step=Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      ctx.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      ctx.lineTo(x,y)
      rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=40;
    ctx.strokeStyle='grey';
    ctx.stroke();
    ctx.fillStyle='green';
    ctx.fill();
}
function drawSun(cx,cy,spikes,outerRadius,innerRadius){
    let rot=Math.PI/2*3;
    let x=cx;
    let y=cy;
    let step=Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      ctx.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      ctx.lineTo(x,y)
      rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=10;
    ctx.strokeStyle='grey';
    ctx.stroke();
    ctx.fillStyle='yellow';
    ctx.fill();
}

function drawSun2(cx,cy,spikes,outerRadius,innerRadius){
    let rot=Math.PI/2*3;
    let x=cx;
    let y=cy;
    let step=Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      ctx.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      ctx.lineTo(x,y)
      rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=10;
    ctx.strokeStyle='orange';
    ctx.stroke();
    ctx.fillStyle='orange';
    ctx.fill();
}

function drawStar2(cx,cy,spikes,outerRadius,innerRadius){
    let rot=Math.PI/2*3;
    let x=cx;
    let y=cy;
    let step=Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      ctx.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      ctx.lineTo(x,y)
      rot+=step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.lineWidth=15;
    ctx.strokeStyle='grey';
    ctx.stroke();
    ctx.fillStyle='cyan';
    ctx.fill();
}

function redStar(){
    ctx.beginPath();
    for (var i = 0;i < 5;i++) {
        ctx.lineTo(Math.cos( (18+i*72-30)/180*Math.PI )*300 + 500, -Math.sin( (18+i*72-30)/180*Math.PI )*300 + 500);
        ctx.lineTo(Math.cos( (54+i*72-30)/180*Math.PI )*150 + 500, -Math.sin( (54+i*72-30)/180*Math.PI )*150 + 500);
     }  //30 радиан вращения
     ctx.closePath();
     ctx.fillStyle = "#f00";
     ctx.fill();
     ctx.stroke();
 
}
drawStar(200,400,5,150,80);
drawSun(700,400,30,150,130);
drawSun2(700,800,18,140,70)
drawStar2(200,800,8,150,85)
// redStar()
function drawOwnStar(x,y){
    ctx.beginPath();
    ctx.moveTo(x+1000,y+500)
    ctx.lineTo(x+1166,y+778)
    ctx.lineTo(x+1444,y+834)
    ctx.lineTo(x+1277,y+1055)
    ctx.lineTo(x+1333,y+1333)
    ctx.lineTo(x+1000,y+1250)
    ctx.lineTo(x+667,y+1333)
    ctx.lineTo(x+723,y+1055)
    ctx.lineTo(x+556,y+834)
    ctx.lineTo(x+834,y+778)
    ctx.lineTo(x+1000,y+500)
    ctx.strokeStyle = '#FF355F'
    ctx.lineWidth = 50
    ctx.stroke();
    ctx.fillStyle = 'cyan'
    ctx.fill();
    ctx.closePath()
}
drawOwnStar(500,-400)


