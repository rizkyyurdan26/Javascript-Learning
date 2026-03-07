const inputNama = document.getElementById('nama')
const inputUmur = document.getElementById('umur')
const btnSubmit = document.getElementById('btnForm')

const outputNama = document.getElementById('outputNama')
const outputUmur = document.getElementById('outputUmur')

const inputProcess = () => {
    console.log(inputNama.value)
    console.log(inputUmur.value)

    outputNama.innerText = `Nama: ${inputNama.value}`
    outputUmur.innerText = `Umur: ${inputUmur.value}`
}

btnSubmit.addEventListener('click', inputProcess)
