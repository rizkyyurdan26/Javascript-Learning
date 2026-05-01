const dataSiswa = [
    {'nama': 'Budi', 'umur': 21},
    {'nama': 'Andi', 'umur': 22},
]

console.log(dataSiswa)

for (i of dataSiswa) {
    console.log(i.nama, i.umur)
}

// Mengambil Nama
const nama = dataSiswa.map(n => n.nama)
for (n of nama){
    console.log(n)
}