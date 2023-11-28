class Hero {
  constructor(nickName, age, type) {
    this.nickName = nickName;
    this.age = age;
    this.type = type;
  }

  sayHello() {
    console.log(
      `Olá!! Eu sou ${this.nickName}, um herói do reino de Arcadia com ${this.age} anos de idade, do tipo ${this.type}.`
    );
  }

  attack() {
    let attackDescrition = "";

    switch (this.type) {
      case "guerreiro":
        attackDescrition = "espada";
        break;
      case "mago":
        attackDescrition = "magia";
        break;
      case "barbaro":
        attackDescrition = "machado";
        break;
      case "mercenario":
        attackDescrition = "adaga";
        break;
      default:
        ataqueDescricao = "ataque indefinido";
        break;
    }
    console.log(`O ${this.type} atacou usando ${attackDescrition}`);
  }
}

// Example of creating an instance of the Person class
const hero1 = new Hero("Tenkai", 30, "mago");

// Calling the sayHello method on the created instance
hero1.sayHello();
hero1.attack();
