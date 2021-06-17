window.onload = function estados() {
    let todosOsEstados = ['Bahia','Amazonas','Minas Gerais', 'São Paulo', 'Rio de Janeiro']
    let selecionaSlt = document.querySelector('#estado');

    for (let index = 0; index < todosOsEstados.length; index+= 1) {
        let criaOp = document.createElement('option')
        criaOp.innerText = todosOsEstados[index];
        selecionaSlt.appendChild(criaOp);
        
    }
}
<<<<<<< HEAD

function verificaData() {
    let data = document.getElementById("#data");
    let dataFormat = data.split("/",3);
    if(dataFormat.split[0] < 0 || dataFormat.split[0] >= 31) {
        return false;
    } else if (dataFormat.split[1] < 0 || dataFormat.split[1] >= 12) {
        return false;
    } else if (dataFormat.split[2] < 0) {
        return false;
=======
function verificaData() {
    preventDefault();
    let data = document.getElementById("data");
    console.log(data);
    let dataFormat = data.split("/");
    if(dataFormat[0] < 0 || dataFormat[0] >= 31) {
        alert("Dia do mês invalido!")
    } else if (dataFormat[1] < 0 || dataFormat[1] >= 12) {
        alert("Mês invalido!")
    } else if (dataFormat[2] < 0) {
        alert("Ano invalido!")
    } else {

>>>>>>> d7caaa11210a476ec26a0e1d30356b2a48094f6d
    }
}
let envio = document.getElementById("enviar");
envio.addEventListener("click", verificaData);


