const data1 = {nama: 'Budi', umur: 20}


// Copy yang salah
const data2 = data1
data2.nama = "Dina"

console.log(data1)
console.log(data2)

// Copy yang benar
const dataBaru = {nama: 'Tiara', umur: 19}
const dataBaru2 = {...dataBaru}
dataBaru.umur = 21

console.log(dataBaru)
console.log(dataBaru2)

// Array begitu juga