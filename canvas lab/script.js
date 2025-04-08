let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');





function desenhar_quadrado(color1,x1,y1,w1,h1){
   
ctx.beginPath();
ctx.fillStyle = color1;
ctx.fillRect(x1,y1,w1,h1);
ctx.closePath()

}


desenhar_quadrado('blue',0,0,30,30)
desenhar_quadrado('red',270,0,30,30)
desenhar_quadrado('yellow',0,270,30,30)
desenhar_quadrado('yellow',0,240,30,30)
desenhar_quadrado('yellow',30,270,30,30)
desenhar_quadrado('black',270,270,30,30)
desenhar_quadrado('black',270,240,30,30)
desenhar_quadrado('black',240,270,30,30)
desenhar_quadrado('aqua',0,130,20,20)
desenhar_quadrado('aqua',0,150,20,20)
desenhar_quadrado('aqua',280,140,20,20)
desenhar_quadrado('red',120,150,30,30)


function linha(w2,color2,x2,y2,x2_1,y2_2){
    ctx.beginPath()
    ctx.lineWidth = w2
    ctx.strokeStyle = color2
    ctx.moveTo(x2,y2)
    ctx.lineTo(x2_1,y2_2)
    ctx.stroke()
    ctx.closePath()
}
linha(1,'green',0,150,300,150)
linha(1,'blue',150,150,0,0)
linha(1,'red',150,150,300,0)
linha(1,'green',150,150,150,300)

function arco(w3,color3,color3_1,x3,y3,a,pi1,pi2){
ctx.beginPath();
ctx.lineWidth = w3;
ctx.fillStyle = color3
ctx.strokeStyle = color3_1;
ctx.arc(x3,y3,a,pi1*Math.PI,pi2*Math.PI);
ctx.fill()
ctx.stroke();
ctx.closePath();
}
arco(1,'rgba(255, 0, 0, 0)','green',150,150,50,1,0)
arco(1,'rgba(255, 0, 0, 0)','green',120,150,56,1,1.38)
arco(1,'rgba(255, 0, 0, 0)','green',174,150,56,1.65,0)
arco(1,'aqua','green',150,120,10,0,2)
arco(1,'aqua','green',150,300,40,1,0)
arco(1,'yellow','green',220,215,10,0,2)
arco(1,'yellow','green',80,215,10,0,2)
arco(1,'rgba(255, 0, 0, 0)','green',150,300,76,1,1.5)
arco(1,'rgba(255, 0, 0, 0)','green',150,300,60,1.5,0)

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'black';
ctx.font = "20px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",150,50);
ctx.closePath();
// let jota = document.getElementById('jota')
// let ctx = jota.getContext('2d')





// ctx.beginPath();
// ctx.lineWidth = 1;
// ctx.fillStyle = 'blue';
// ctx.fillRect(0,0,50,50);
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'red';
// ctx.fillRect(250,0,50,50);
// ctx.closePath();
// //de cima
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'yellow';
// ctx.fillRect(0,240,30,30)
// //ponta
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'yellow';
// ctx.fillRect(0,270,30,30)
// //direita
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'yellow';
// ctx.fillRect(30,270,30,30)

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'black';
// ctx.fillRect(270,270,30,30)

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'black';
// ctx.fillRect(240,270,30,30)

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'black';
// ctx.fillRect(270,240,30,30)
// //quadrados esquerda---------------------------------------------
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'aqua';
// ctx.fillRect(0,120,30,30)

// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'aqua';
// ctx.fillRect(0,150,30,30)
// //quadrado direita-----------------------------------------------------------------
// ctx.beginPath();
// ctx.lineWidth = 1;
// ctx.fillStyle = 'aqua';
// ctx.fillRect(270,135,30,30)
// //quadrado meio---------------------------------------------------------------
// ctx.beginPath();
// ctx.lineWidth = 1;
// ctx.fillStyle = 'red';
// ctx.fillRect(110,150,40,40)
// //linhas--------------------------------------------------------------------------
// ctx.beginPath();
// ctx.lineWidth = 1
// ctx.strokeStyle = 'blue';
// ctx.moveTo(50,50)
// ctx.lineTo(150,150)
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath();
// ctx.lineWidth = 1
// ctx.strokeStyle = 'lightgreen';
// ctx.moveTo(0,150)
// ctx.lineTo(300,150)
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath();
// ctx.lineWidth = 1
// ctx.strokeStyle = 'red';
// ctx.moveTo(250,50)
// ctx.lineTo(150,150)
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath();
// ctx.lineWidth = 1
// ctx.strokeStyle = 'grey';
// ctx.moveTo(150,150)
// ctx.lineTo(150,260)
// ctx.stroke()
// ctx.closePath()

// //arcos---------------------------------------------------
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'aqua';
// ctx.strokeStyle = 'lightgreen';
// ctx.arc(150,300,40,1*Math.PI,0*Math.PI);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'lightgreen'
// ctx.arc(150, 300, 80, Math.PI, 1.5 * Math.PI);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'lightgreen'
// ctx.arc(120, 150, 50, Math.PI, 1.38 * Math.PI);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'lightgreen'
// ctx.arc(150, 150, 50, 1*Math.PI, 0 * Math.PI);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'lightgreen'
// ctx.arc(180, 150, 50, 1.62 *Math.PI, 0 * Math.PI);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'lightgreen'
// ctx.arc(150, 300, 60, 1.5 *Math.PI, 0 * Math.PI);
// ctx.stroke();
// ctx.closePath();

// //bolinhas--------------------------------------------------------------
// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'lightgreen'
// ctx.fillStyle = 'yellow'
// ctx.arc(60, 220, 15, 2 *Math.PI, 0 * Math.PI);
// ctx.stroke();
// ctx.fill()
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'lightgreen'
// ctx.fillStyle = 'yellow'
// ctx.arc(220, 219, 15, 2 *Math.PI, 0 * Math.PI);
// ctx.stroke();
// ctx.fill()
// ctx.closePath();

// ctx.beginPath();
// ctx.lineWidth = 2
// ctx.strokeStyle = 'blue'
// ctx.fillStyle = 'aqua'
// ctx.arc(150, 120, 15, 2 *Math.PI, 0 * Math.PI);
// ctx.stroke();
// ctx.fill()
// ctx.closePath();

// //canvas--------------------------------------
// ctx.beginPath();
// ctx.lineWidth = 0.1;
// ctx.fillStyle = 'grey';
// ctx.strokeStyle = 'grey';
// ctx.font = "20px Arial"
// ctx.textAlign = "center";
// ctx.fillText("Canvas",150,50);
// ctx.strokeText("Canvas",150,50)
// ctx.closePath();

//casinha

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

function retangulo(l,color,x4,y4,w4,h4){
    ctx2.beginPath()
    ctx2.lineWidth = l
    ctx2.fillStyle = color
    ctx2.fillRect (x4,y4,w4,h4)
    ctx2.closePath()
}
retangulo(1,'brown',120,150,60,100)
retangulo(1,'brown',50,170,20,60)
retangulo(1,'grey',0,220,300,150)
retangulo(1,'brown',250,210,20,60)
retangulo(1,'rgb(117, 19, 19)',145,190,10,30)
retangulo(1,'dodgerblue',0,270,90,50)
retangulo(1,'dodgerblue',0,240,30,30)
retangulo(1,'cyan',125,165,20,20)
retangulo(1,'cyan',155,165,20,20)

function circulo(l2,color2,x5,y5,h5,pi3,pi4){
    ctx2.beginPath()
    ctx2.lineWidth = l2
    ctx2.fillStyle = color2
    ctx2.arc(x5,y5,h5,pi3*Math.PI,pi4*Math.PI)
    ctx2.fill()
    ctx2.closePath()
}
circulo(1,'yellow',225,75,40,0,2)
circulo(1,'green',260,205,25,0,2)
circulo(1,'green',60,170,25,0,2)
circulo(1,'dodgerblue',6,240,25,1,0)
circulo(1,'dodgerblue',90,297,25,1.5,2.5)

ctx2.beginPath()
ctx2.lineWidth = 1
ctx2.fillStyle = 'rgb(228, 56, 85)'
ctx2.moveTo(120,150) //vertice 1(cima)
ctx2.lineTo(150,130) //vertice 2(baixo esquerda)
ctx2.lineTo(180,150)//vertice 3(baixo direita)
ctx2.fill()
ctx2.closePath()
