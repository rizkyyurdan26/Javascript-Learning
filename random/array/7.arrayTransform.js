const arr = [1,2,3]
const kaliDua = arr.map(n => n*2)

// console.log(arr)
// console.log(kaliDua)

// Maping ke dalam hari
const hari = ['Senin', 'Selasa', 'Rabu']
const arr2 = [1,2,3]

const mix = arr2.map(item => hari[item - 1])
console.log(mix)
