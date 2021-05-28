//Примеры использования прототипов!


const person = new Object({
    name: 'Maxim',
    age: 228,
    greet: () => {
        console.log('Hello')
    }
})


Object.prototype.sayHello = function () {
    console.log('Hello')
}

const lena = Object.create(person)
lena.greet()

const str = String('I am string')
