class Character {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  armour(units) {
    console.log(this.name + ' has ' + units + ' armour');
    return this;
  }
  damage(units) {
    if (this.role == 'Mage' || this.role == 'Support') {
      console.log(`${this.name} has MAGIC DAMAGE of ${units} units!`); ////   აქ this.units არ გამოვიდა და რატომ არ მჭრდება this?!!!
    } else {
      console.log(`${this.name} has ATTACK DAMAGE of ${units} units!`);
    }
    return this;
  }
}

class Mage extends Character {
  magicPower() {
    console.log(this.name + ' is a Mage and it can FLY!');
    return this;
  }
}

class Support extends Mage {
  heal(units) {
    console.log(`${this.name} is Support and can Heal ${units} heroes!`);
    return this;
  }
}

class Adc extends Character {
  attackDamage(units) {
    units < 30
      ? console.log(`${this.name} is Close range with ${units} units`)
      : console.log(`${this.name} is Long range with ${units} units`);
    return this;
  }
}

let oneCharacter = new Character('Hummy', 'Tank');
let oneMage = new Mage('Sally', 'Mage');
let oneSupport = new Support('Utah', 'Support');
let oneAdc = new Adc('Traum', 'ADC');

console.log(oneCharacter.damage(50).armour(100));
console.log(oneMage.damage(90).magicPower());
console.log(oneSupport.heal(10));
console.log(oneAdc.attackDamage(20).attackDamage(40));
