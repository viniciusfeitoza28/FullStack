let i = Math.random() * 100;
let x =Math.floor(i);
console.log(x)
//tira o alert depois
alert(x)


function verificar() {

    const entrada = document.getElementById("entrada_usuario").value;
    const tentativa = parseInt(entrada);
//-

    const pequenas = document.getElementById("pequenas");
    const grandes = document.getElementById("grandes");
    const container = document.querySelector(".centro-container");
//-

    if (tentativa < 0 || tentativa > 100) {
        alert("Digite um número entre 0 e 100.");
        return;
    }

    if (tentativa === x) {
        alert("Número Correto!");
        container.style.setProperty("background-color", "lightgreen");
    } else {
        container.style.setProperty("background-color", "red");
        if (tentativa < x) {
            pequenas.innerHTML += tentativa + " ";
        } else {
            grandes.innerHTML += tentativa + " ";
        }
    }
}