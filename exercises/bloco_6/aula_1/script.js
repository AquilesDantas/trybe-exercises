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
    let data = document.getElementById("#data");
    let dataFormat = data.split("/",3);
    if(dataFormat.split[0] < 0 || dataFormat.split[0] >= 31) {
        return false;
    } else if (dataFormat.split[1] < 0 || dataFormat.split[1] >= 12) {
        return false;
    } else if (dataFormat.split[2] < 0) {
        return false;
    }
}