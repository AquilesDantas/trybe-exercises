window.onload = function estados() {
    let todosOsEstados = ['Bahia','Amazonas','Minas Gerais', 'São Paulo', 'Rio de Janeiro']
    let selecionaSlt = document.querySelector('#estado');

    for (let index = 0; index < todosOsEstados.length; index+= 1) {
        let criaOp = document.createElement('option')
        criaOp.innerText = todosOsEstados[index];
        selecionaSlt.appendChild(criaOp);
        
    }
}
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

    }
}
let envio = document.getElementById("enviar");
envio.addEventListener("click", verificaData);


