const person = Object.create({
    calcAge(){
        console.log('Age', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Isa',
        enumerable: true,
        writable: true, //изменение значения
        configurable: true, //удаление ключа
    },
    birthYear: {
        value: 2003,
        enumerable: true,
        writable: false
    },
    age : {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(v) {
            this.birthYear = v
            console.log('Set age', v)
        }

    }
})
console.log(person.name)

person.name = 'Maxim'

for (let key in person) {
    console.log('Key', key, person[key])
}

delete person.name

for (let key in person) {
    console.log('Key', key, person[key])
}

person.calcAge()
console.log(person.age )