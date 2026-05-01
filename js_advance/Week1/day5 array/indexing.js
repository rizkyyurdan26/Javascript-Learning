const arrayName = ['Adi', 'Budi', 'Rini', 'Diks']

console.log(arrayName[1])

// menghapus bersarkan index
arrayName.splice(1,1)
console.log(arrayName)

// Memasukkan object ke index yang diinginkan (setelah index 1)
arrayName.splice(1,0, 'Dini')
console.log(arrayName)

// mengganti object 
arrayName.splice(2,1, 'Riki')
console.log(arrayName)


// ============
// Slice

const lulus = arrayName.slice(0,2)
console.log('slice: '+lulus)
console.log('asli: '+arrayName)