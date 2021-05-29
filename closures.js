//Замыкания - функуия внутри другой функции

function creteCalcFunc(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = creteCalcFunc(42)
calc()


function createInc(n){
    return function (num){
        return n + num;
    }
}

const addOne = createInc(1)
console.log(addOne(10))


function urlGenerator(domain){
    return function (url){
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
console.log(comUrl('google'))


//Custom function Bind

function bind(context, fn){
    return function (...args){
        fn.apply(context, args)
    }
}