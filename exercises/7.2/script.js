/*const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

order.name2 = "Luiz Silva";
order.order.pizza.muzzarela = {amount: 1, price: 20};
order.order.pizza.calabresa = {amount: 1, price: 20};


const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira,
  // entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  console.log(`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street} Nº: ${order.address.number}, AP: ${order.address.apartment}.`);

}

customerInfo(order);


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva,
  //  o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
console.log(` Olá, ${order.name2} o total do seu pedido de muzzarela, calabresa e coca-zero e de R$ ${order.order.pizza.muzzarela.price+order.order.pizza.calabresa.price+order.order.drinks.coke.price},00.`);


}

orderModifier(order);
*/
// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie uma função para mostrar o tamanho de um objeto.
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
// Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:


const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adciona = (lesson) => {
  lesson2.turno = 'manhã'; 
  return lesson2;
}

const keys = (lesson) => {
  const key = Object.keys(lesson);
  return key;

}

const size = (lesson) => {
  const dim = Object.keys(lesson).length;
  return dim;
}

const value = (lesson) => {
  const val = Object.values(lesson);
  return val;
}

const allLessons = {
}

Object.assign({allLessons,lesson1},{allLessons,lesson2},{allLessons,lesson3});


console.log(adciona(lesson2));
console.log(keys(lesson3));
console.log(size(lesson3));
console.log(value(lesson3));
console.log(allLessons);
