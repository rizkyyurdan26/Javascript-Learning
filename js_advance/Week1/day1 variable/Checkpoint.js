const tasPemain = [
    {nama: "Ramuan HP", jumlah: 5},
    {nama: 'Pedang Kayu', jumlah: 1}
]

tasPemain.push({nama: "Perisai Besi", jumlah: 1})

const barangBudi = {...tasPemain[0]}
barangBudi.jumlah = 0

console.log(tasPemain)
console.log(barangBudi)