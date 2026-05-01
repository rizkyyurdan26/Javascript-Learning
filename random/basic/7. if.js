const inputNilai = document.getElementById('nilai')
const outputNilai = document.getElementById('outputNilai')
const outputGrade = document.getElementById('outputGrade')

const btnSubmit = document.getElementById('btn')

const result = () => {

    if (inputNilai.value >= 90) {
        console.log('Nilai A')
        outputNilai.innerText = 'Kategori Nilai: '
        outputGrade.innerText = 'Nilai A'
    }
    else if (inputNilai.value >= 80) {
        console.log('Nilai B')
        outputNilai.innerText = 'Kategori Nilai: '
        outputGrade.innerText = 'Nilai B'
    }
    else {
        console.log('Nilai C')
        outputNilai.innerText = 'Kategori Nilai: '
        outputGrade.innerText = 'Nilai C'
    }
}

btnSubmit.addEventListener('click', result)