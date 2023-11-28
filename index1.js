//Declaração de um objeto
/*
let filmes = {
  titulo: "Velozes e Furiosos",
  lancamento: 2001,
  duracao: "2 horas",
};

console.log(filmes);
console.log(filmes.lancamento);

console.log(
  `O filme ${filmes.titulo} foi estreado em ${filmes.lancamento} e tem duração de ${filmes.duracao}`
);

filmes.titulo = "Rambo";
filmes.lancamento = 1986;
filmes.duracao = "2h15min";
console.log(
  `O filme ${filmes.titulo} foi estreado em ${filmes.lancamento} e tem duração de ${filmes.duracao}`
);*/

/*
let funcionario = {
  name: {
    first: "Maria",
    last: "Silva",
  },
  age: 27,
  function: "Officer",
  salary: {
    inicial: 1800,
    actual: 2500,
  },
  bio() {
    console.log(
      `A colaboradora ${funcionario.name.first} tem ${funcionario.age} anos e tem um salário de R$ ${funcionario.salary.actual}`
    );
  },
};

funcionario.unidade = "Matriz";

let callAdress = "adress";
let adress = {
  street: "rua das flores",
  neiborwood: "São Bento",
  city: "sorocaba",
  state: "São Paulo",
};

funcionario[callAdress] = adress;

funcionario.bio();
console.group(funcionario);*/

//Teste de construtores
function Person(name, age, adress, salary) {
  this.name = name;
  this.age = age;
  this.adress = adress;
  this.salary = salary;
  this.introduceSelf = function () {
    console.log(
      `O colaborador(a) ${name} tem ${age} anos e tem R$${salary} de salário.`
    );
  };
}

const joao = new Person("João", 27, "Rua das flores", 2800);
joao.introduceSelf();
console.log(joao.name);
