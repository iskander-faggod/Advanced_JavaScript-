function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Iskander',
    age: 25,
    sayHello: hello,
    logInfo: function () {
        console.group(`${this.name} info :`)
        console.log(`Name is ${this.name}`)
        console.groupEnd()
    }

}

const lena = {
    name: 'Lena',
    age: 23
}

person.logInfo.bind(lena)()

//==================
const array = [1, 2, 3, 4, 5]

function multBy(arr, n) {
    return arr.map(elem => elem * n)
}

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(multBy(array, 3))
console.log(array.multBy(3))