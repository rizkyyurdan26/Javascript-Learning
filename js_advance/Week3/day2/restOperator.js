function CountAll(pesan, ...angka){
    const total = angka.reduce((acc, curr) => acc + curr, 0)

    return `${pesan} : ${total}`
}

console.log(CountAll("Total donasi:", 1000, 2000, 5000))

const mobil = { merk: "Toyota", tipe: "SUV", tahun: 2022, warna: "Hitam" }
const {merk, ...spesifikasi} = mobil
console.log(spesifikasi)