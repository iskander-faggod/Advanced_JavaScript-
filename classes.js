class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am animal')
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.color = options.color
    }

    voice() {
        console.log('I am cat')
    }

    get ageInfo(){
        return this.age * 5
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 5,
    hasTail: true,
    color: 'black'
})

console.log(cat.color)
cat.voice()
console.log(cat.ageInfo)