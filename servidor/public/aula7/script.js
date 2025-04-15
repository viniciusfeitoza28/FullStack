let canvas =document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// retângulos
ctx.beginPath();
ctx.lineWidth = 5; //largura borda
ctx.fillStyle = 'blue'; //"preenchimento do interior"
ctx.strokeStyle = 'red'; //cor da borda
ctx.fillRect(0,0,70,70);
ctx.strokeRect(70,70,50,50);
ctx.closePath();

//outra figura
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);  //pincel vai pra este ponto sem desenhar nada
ctx.lineTo(120,120); //lineTo ele vai desenhar ate as cordenadas que escreveu
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

//a que eu fiz
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';

ctx.arc(350,250,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "50px Arial"
ctx.textAlign = "center";
ctx.fillText("baiacu",200,350);
ctx.strokeText("baiacu",200,350)
ctx.closePath();

//ex
let canvas2 =document.getElementById('canvas2')
let ctx2 = canvas2.getContext('2d')

//quadrado vermelho
ctx.beginPath()
ctx2.fillStyle = 'red'; //"preenchimento do interior"
ctx2.fillRect(0,0,50,50);
ctx2.closePath();

//quadrado azul
ctx.beginPath()
ctx2.fillStyle = 'blue'; //"preenchimento do interior"
ctx2.fillRect(350,0,50,50);
ctx2.closePath();

//q amarelo
//quadrado azul
ctx.beginPath()
ctx2.fillStyle = 'yellow'; //"preenchimento do interior"
ctx2.fillRect(0,350,50,50);
ctx2.closePath();

//q verde
ctx.beginPath()
ctx2.fillStyle = 'green'; //"preenchimento do interior"
ctx2.fillRect(350,350,50,50);
ctx2.closePath();



//linha
ctx2.beginPath();
ctx2.lineWidth = 1
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.moveTo(50,50)
ctx2.lineTo(350,350)
ctx2.lineTo(400,400)
ctx2.fill()
ctx2.stroke()
ctx2.closePath()

//linha2
ctx2.beginPath();
ctx2.lineWidth = 1
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.moveTo(400,0)
ctx2.lineTo(400,0)
ctx2.lineTo(0,400)
ctx2.fill()
ctx2.stroke()
ctx2.closePath()

//linha horizontal

ctx2.beginPath();
ctx2.lineWidth = 1
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,200)
ctx2.lineTo(0,200)
ctx2.lineTo(400,200)
ctx2.fill()
ctx2.stroke()
ctx2.closePath()

//arco central
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,50,0*Math.PI,1*Math.PI);
ctx2.stroke();
ctx2.closePath();


//circulo
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(70,125,20,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//circulo2
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(320,125,20,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//talvez casinha
let canvas3 =document.getElementById('canvas3')
let ctx3 = canvas3.getContext('2d')


//sol
ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'yellow';
ctx3.strokeStyle = 'yelllow';
ctx3.arc(320,90,20,0*Math.PI,2*Math.PI);
ctx3.fill();
ctx3.stroke();
ctx3.closePath();