let array = [1,2,3,4,5,6]

// Jumlah 
let jumlah = array.reduce((accumulator, currVal) => accumulator + currVal, 0)

// Kurang
let kurang = array.reduce((min, value) => min - value)

// kali
let kali = array.reduce((mlt, val) => mlt * val)

// Bagi
let bagi = array.reduce((div, val) => div / val)

// Sqrt
let sqrt = array.reduce((sqrt, val) => sqrt**val)

console.log(jumlah)
console.log(kurang)
console.log(kali)
console.log(bagi)
console.log(sqrt)