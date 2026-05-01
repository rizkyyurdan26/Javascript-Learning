// Object destructuring
const user = {nama: "Budi", umur: 25, role: "Admin"}

const {nama, umur, role} = user
console.log(role)

// Array destructuring
const coordinate = [100, -500, 999]
const [x, y, z] = coordinate
const [, sumbuY, sumbuZ] = coordinate
console.log(y)
console.log(sumbuY)