let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


class retangulo{
    constructor(cor_linha,cor_preenchimento,espessura_linha,x,y,largura,altura){
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento ;
        this.cor_espessura_linha = espessura_linha ;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        
    }
    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha; 
        contexto.fillStyle = this.cor_preenchimento; 
        contexto.strokeStyle = this.cor_linha; 
        contexto.fillRect(this.x,this.y,this.largura,this.altura);
        contexto.strokeRect(this.x,this.y,this.largura,this.altura);
        contexto.closePath();
    }
}

let quadrado = new retangulo('blue','red',3,140,140,20,20);
quadrado.desenhe(ctx)

document.addEventListener('mousemove',function(evento) {
    let rect = canvas.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    
    console.log(x_mouse,y_mouse)
    quadrado.x = x_mouse;
    quadrado.y = y_mouse;
})




// let bolafodase = {
//     x: 0, 
//     y: 0,
//     raio:50,
//     img: new Image()
//     desenhe: function(){
//         this.img.src = 'bolafodase.webp'
//         ctx.BeginPath();  
//         ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
//         ctx.closePath();
//     }
// }



// document.addEventListener('mousemove',function(evento){
//     let rect = canvas.getBoundingClientRect()
//     let x_mouse = evento.clientX - rect.left;
//     let y_mouse = evento.clientY - rect.top;

//     console.log(x_mouse,y_mouse);
//     bolafodase.x = x_mouse;
//     bolafodase.y = y_mouse;

// })

