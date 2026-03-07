// Manipulation Title
document.title = "Belajar-DOM"

// Manipulation Body
console.log(document.body)
const body = document.body
body.append('Hello World')


const h1 = document.createElement('h1')
h1.textContent = 'Belajar DOM'
body.append(h1)

const namaSaya = document.createElement('p')
namaSaya.innerHTML = 'Nama saya: <b>Bejo</b>'
body.append(namaSaya)

const namaAnda = document.createElement('p')
namaAnda.innerText = 'Nama Anda: Budi'
body.append(namaAnda)