// Array
const mhsLama = ['Andi', 'Budi']
const mhsBaru = ['Citra', 'Dewi']

const allMhs = [...mhsLama, ...mhsBaru]
allMhs.push('Eko')

console.log(mhsLama, mhsBaru)
console.log(allMhs)

// Object
const profil = {nama: 'Andi', role: 'user'}
const admin = {...profil, role: 'admin', active: true}

console.log(profil)
console.log(admin)