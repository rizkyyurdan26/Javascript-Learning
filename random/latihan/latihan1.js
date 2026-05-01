const nama = "Yurdan"
let umur = 25

// console.log(`Hallo, nama saya ${nama}, umur ${umur} tahun, \numur saya 5 tahun lagi adalah ${umur + 5}`)


// Tahun lahir
const tahunLahir = 2000
const tahunSekarang = new Date().getFullYear()

console.log(`Nama saya ${nama}, \nsaya lahir tahun ${tahunLahir},\nUmur saya sekarang ${tahunSekarang - tahunLahir}`)


// Conditional 

function checkUmur(umur){
    if (umur >= 18){
        return "Anda sudah dewasa"
    } else {
        return "Anda masih anak-anak"
    }
}

const age = tahunSekarang - tahunLahir
console.log(checkUmur(age))

// Conditional 2

function checkStatus(age){

    if (age >= 18){
        return "Dewasa"
    } else if (age >= 13 && age < 18) {
        return "Remaja"
    } else {
        return "Anak-anak"
    }
}

console.log(checkStatus(age))