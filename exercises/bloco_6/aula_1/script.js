window.onload = function estados() {
    let todosOsEstados = ['Bahia','Amazonas','Minas Gerais', 'São Paulo', 'Rio de Janeiro']
    let selecionaSlt = document.querySelector('#estado');

    for (let index = 0; index < todosOsEstados.length; index+= 1) {
        let criaOp = document.createElement('option')
        criaOp.innerText = todosOsEstados[index];
        selecionaSlt.appendChild(criaOp);
        
    }
}
let data = document.getElementById("#data");
let dataFormat = data.split("/",3);
function verificaData() {
    if(dataFormat.split[0] < 0 || dataFormat.split[0] >= 31) {
        alert("Dia do mês invalido!")
    } else if (dataFormat.split[1] < 0 || dataFormat.split[1] >= 12) {
        alert("Mês invalido!")
    } else if (dataFormat.split[2] < 0) {
        alert("Ano invalido!")
    }
}
