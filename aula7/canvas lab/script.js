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