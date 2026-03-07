// Flexible array

const arr2 = []

arr2[0] = 'satu'
arr2[1] = 'dua'
arr2[2] = 'tiga'

console.log(arr2)

// mengganti isi array

arr2[2] = 'empat'

console.log(arr2)

// Membut array dengan object

const arr3 = new Array(1, 2, 3)
console.log(arr3[0])

const checkArray = arr3.includes(2)
console.log(checkArray)

const checkPosition = arr2.indexOf('tiga')
console.log(checkPosition)