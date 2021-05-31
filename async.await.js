const delay = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

delay(2000).then(result => console.log('2 seconds'))

const url = 'https://jsonplaceholder.typicode.com/posts'

function fetchTodos() {
    return delay(2000).then(() => {
        return fetch(url)
    }).then(res => res.json())
}

fetchTodos().then(data => console.log(data)).catch(error => console.log(error))


//with async/await

//await === обработка promise
async function fetchAsyncTodos() {
    try {
        await delay(2000)
        const res = await fetch(url)
        return await res.json()
    } catch (err) {
        if (err) {
            console.log(err)
        }
    } finally {
        console.log('Successfully fetched')
    }

}

console.log(fetchAsyncTodos())