/*const pessoa = {
  p1:'pedro',
  p2:'joao',
  p3:'tiago',
}
const email = {
  e1:'em1',
  e2:'em2',
  e3:'em3',
};

const nomes = (nomeCompleto, emails) => {
  const obj = {
    comp1: pessoa.p1 + email.e1,
    comp2: pessoa.p2 + email.e2,
    comp3: pessoa.p3 + email.e3,
  } 
  return newEmployees(obj);
}


const newEmployees = (nomes) => {
  const employees = {
    id1: nomes.comp1, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomes.comp2, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomes.comp3, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id .
A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente
um email no formato nome_da_pessoa@trybe.com.*/
// console.log(nomes(pessoa,email));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5.
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

/*const aposta = [1,2,3,4,5];

const getRandomInt = (min, max) => {
  let arrayresult = [];
  for (let index = 0; index < 6; index+= 1) {
    let result = Math.floor(Math.random() * (max - min)) + min;
    arrayresult.push(result);
  } return compara(arrayresult);
};

const compara = (resultado) => {
if(resultado === aposta) {
  return 'Parabens vc ganhou!'
    } else {
  return 'Tente na proxima.'
  }
};

console.log(getRandomInt(0,9)); */

// 3-----------------------------------------------
// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito),
//  o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro
//  é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida
//  pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
//  e quando não houver resposta ("N.A") não altera-se a contagem.


const  armazena = () => {
  const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  const ciclo = [];
  for (let index = 0; index < rightAnswers.length; index++) {
    ciclo = rightAnswers[index];
    return compara(ciclo);
    
  }
}
const compara = (ciclo) => {
  const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
  for (let index = 0; index < studentAnswers.length; index++) {
    
    
  }
}