let jota = document.getElementById('jota')
let ctx = jota.getContext('2d')

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.closePath();
//de cima
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,240,30,30)
//ponta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,270,30,30)
//direita
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(30,270,30,30)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(270,270,30,30)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(240,270,30,30)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(270,240,30,30)
//quadrados esquerda---------------------------------------------
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(0,120,30,30)

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(0,150,30,30)
//quadrado direita-----------------------------------------------------------------
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.fillRect(270,135,30,30)
//quadrado meio---------------------------------------------------------------
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'red';
ctx.fillRect(110,150,40,40)
//linhas--------------------------------------------------------------------------
ctx.beginPath();
ctx.lineWidth = 1
ctx.strokeStyle = 'blue';
ctx.moveTo(50,50)
ctx.lineTo(150,150)
ctx.stroke()
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 1
ctx.strokeStyle = 'lightgreen';
ctx.moveTo(0,150)
ctx.lineTo(300,150)
ctx.stroke()
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 1
ctx.strokeStyle = 'red';
ctx.moveTo(250,50)
ctx.lineTo(150,150)
ctx.stroke()
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 1
ctx.strokeStyle = 'grey';
ctx.moveTo(150,150)
ctx.lineTo(150,260)
ctx.stroke()
ctx.closePath()

//arcos---------------------------------------------------
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'lightgreen';
ctx.arc(150,300,40,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'lightgreen'
ctx.arc(150, 300, 80, Math.PI, 1.5 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'lightgreen'
ctx.arc(120, 150, 50, Math.PI, 1.38 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'lightgreen'
ctx.arc(150, 150, 50, 1*Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'lightgreen'
ctx.arc(180, 150, 50, 1.62 *Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'lightgreen'
ctx.arc(150, 300, 60, 1.5 *Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

//bolinhas--------------------------------------------------------------
ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'lightgreen'
ctx.fillStyle = 'yellow'
ctx.arc(60, 220, 15, 2 *Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'lightgreen'
ctx.fillStyle = 'yellow'
ctx.arc(220, 219, 15, 2 *Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'aqua'
ctx.arc(150, 120, 15, 2 *Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.fill()
ctx.closePath();

//canvas--------------------------------------
ctx.beginPath();
ctx.lineWidth = 0.1;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'grey';
ctx.font = "20px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",150,50);
ctx.strokeText("Canvas",150,50)
ctx.closePath();

//casinha