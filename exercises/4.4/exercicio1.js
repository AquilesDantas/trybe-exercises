let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente : 'Sim',
  info2 : {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente : 'Sim',
  }
};
console.log('Seja bem vinda, '+ info.personagem+'!');

console.log(info);

for (const key in info) {
    console.log(key);
        
    }

for (const key in info) {
    console.log(info[key]);
            
    }

for (const key in info) {
    console.log(info[key]+info.info2[key]);
                
    }

