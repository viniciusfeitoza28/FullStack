const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "bolafodase.webp"; 

let mouseX = 150;
let mouseY = 150;
const imgW = 50;
const imgH = 50;

document.addEventListener("mousemove", (evento) => {
  const rect = canvas.getBoundingClientRect();
  const offsetX = evento.clientX - rect.left;
  const offsetY = evento.clientY - rect.top;

  let newX = offsetX - imgW / 2;
  let newY = offsetY - imgH / 2;

  newX = Math.max(0, Math.min(newX, canvas.width - imgW));
  newY = Math.max(0, Math.min(newY, canvas.height - imgH));

  mouseX = newX;
  mouseY = newY;
});

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, mouseX, mouseY, imgW, imgH);
  requestAnimationFrame(desenhar);
}

img.onload = () => {
  desenhar();
};