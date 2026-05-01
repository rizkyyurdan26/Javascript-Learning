let inputValue = document.getElementById('inputValue')
let btn = document.getElementById('btn')
let hasil = document.getElementById('hasil')

const createLoop = () => {
    let n = inputValue.value 
    hasil.innerHTML = ''
    
    for (let i = 1; i <= n; i++){
        console.log(i)
        hasil.innerHTML += `<p>Looping ke ${i}</p>`
    }
}

btn.addEventListener('click', createLoop)