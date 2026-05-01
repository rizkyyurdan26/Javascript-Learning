let arr = ['Budi', 'Adi']
arr = ['Dina', 'Sari']
console.log('Let Array:',arr)

// Menambah value
arr.push('Andi')
console.log('Let Array:',arr)

// Mengubah value
arr[0] = "Budi"
console.log('Let Array:',arr)

// Menghapus value (splice(hapus n elemen, sebanyak n elemen))
arr.splice(1, 1)
console.log('Let Array:',arr)

// ================
// Copy arr seperti ini akan mempengaruhi array aslinya juga
let arr2 = arr
arr2.push('Bejo')

console.log('\nCopy array yang salah')
console.log('\n arr1:', arr)
console.log('arr2:', arr2)

// =========
// copy array yang benar
let arra = ['budi', 2, 'adi']
let arrb = [...arra]

console.log('\nCopy array yang Benar')
console.log(`\nArray A:`, arra)
console.log('Array B:', arrb)

arrb.push(5)
console.log(`\nArray A:`, arra)
console.log('Array B:', arrb)






