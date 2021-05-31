// setTimeout(() => {
//     console.log('Preparing Data')
//
//     const backendData ={
//         server: 'aws',
//         port : 2000,
//         status: 'working'
//     }
//     setTimeout(()=>{
//         backendData.modified = true
//         console.log('Data was found', backendData)
//     }, 2000)
// },2000)


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing Data')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
}).then((data) => {
    console.log('new promise')
    setTimeout(() => {
        data.modified = true
    }, 2000)
}).then(data => {
    console.log(data)
})


//
const sleep = (ms) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    }).then(() => console.log(`after ${ms/1000} seconds`))
}

sleep(2000)