const users = [{ id: 1, nama: "Andi" }, { id: 2, nama: "Budi" }];

const cariBudi = users.find(u => u.nama === 'Budi')
console.log(cariBudi)

// findIndex
const cariIdx = users.findIndex(p => p.id === 2)
console.log(`Di index ke: ${cariIdx}`)