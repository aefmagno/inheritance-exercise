const Character = {
    attack: (target) => {
        console.log(target.name + ' takes damage')
    },
    heal: (target) => {
        console.log(target.name + ' heals himself')
    }
}

const person1 = {
    name: 'Sun',
    __proto__:Character
}

const person2 = {
    name: 'Nas',
    __proto__:Character
}

person1.attack(person2)
person2.heal(person2)