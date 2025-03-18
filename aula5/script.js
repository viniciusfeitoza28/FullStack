//window.alert("Hello World!")
console.log("hello world!");

//let nome = prompt("Qual seu nome?");
//console.log (nome);

//console.log("while")
//let i = 0;
//while(i < 10){
    //console.log(i);
    //i++
//}
//console.log("for")
//for(let i = 0; i < 10 ; i++){
    //console.log(i);
//}


//console.log('exercicio 1')
//for(let i = 1 ; i < 100;i += 2){
    //console.log(i);
//}
//console.log('exercicio 2')
//for(let i = 5; i <= 500; i += 5){
    //console.log(i)
//}
//console.log('exercicio 3')
//let x = parseInt (prompt("Digite um número inteiro"));
//if(x < 0){
    //console.log("numero invalido")
//}
//for(let i = x ; i >= 0; i--){
    //console.log(i)
//}

console.log('exercicio 4')
let num = parseInt (prompt("Digite um número inteiro"));
if(num < 0){
    console.log("numero invalido")
}
let mult = 1;
for(let i = num; i > 0; i--){
    mult *= i;
    console.log(i,mult)
}
