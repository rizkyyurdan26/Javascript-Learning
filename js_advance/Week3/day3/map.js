const angka = [1,2,3]
const angkaGanda = angka.map(a => a*2)
console.log(angka)
console.log(angkaGanda)

// Object

const data = [
    {nama: 'Bejo', umur:21},
    {nama: 'Adi', umur:23},
]

const names = data.map(d => d.nama)
console.log(names)