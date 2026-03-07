//  Map
const angka = [1,2,3,4]

const kaliDua = angka.map(a => a*2)
console.log(kaliDua)

// Filter 
const angka2 = [1,2,3,4,5,6,7,8,9]
const ganjil = angka2.filter(x => x%2 != 0)
console.log(ganjil)

// Foreach

const nama = ['Andi', 'Budi', 'Adi']
nama.forEach(n => console.log(n))