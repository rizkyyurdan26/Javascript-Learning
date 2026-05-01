// Retun Object
function operation(a, b){
    let tambah = a + b
    let kurang = a - b

    return {tambah, kurang}
}

const result = operation(6,4)

console.log(result.tambah)
console.log(result.kurang)
console.log(result)

console.log('=====\n')

// Return List
function addUser(nama, umur){
    return [nama, umur]
}

// console.log(addUser('Bejo', 24))

const [nama, umur] = addUser('Andi', 25)
console.log(nama)
console.log(umur)
console.log(`Nama user: ${nama}, Umur ${umur}`)