let i = Math.random() * 100;
let x =Math.floor(i);
let tentavivas = 0;
console.log(i)
let numero = parseInt(document.getElementById(num))

function guess(){
    let numero = parseInt(document.getElementById('num').value);
    if (numero > i){
        document.getElementById('resp').innerHTML = "O numero é menor que" + numero;
        document.getElementById("resp").style.setProperty("background-color","red");
    }
}
else if (num < i ) {
    document.getElementById ('resp').innerHTML = "O numero é maior que"+ numero;
    document.getElementById("resp").style.setProperty("background-color","red");
}
tentar++
document.getElementById('num_tentativa')"" + tentar
if (num == 1) {
    document.getElementById('resp').innerHTML = "Parabens,acertou!"
    document.getElementById("resp").style.setProperty("background-color","green");
    document.getElementById('num_tentativa').innerHTML = ""+ tentar
}
