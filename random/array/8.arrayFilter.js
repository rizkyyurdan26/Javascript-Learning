const nilai = [80, 60, 90]

const lulus = nilai.filter(n => n >= 70)

console.log(lulus)

// Iterasi

for (value of nilai){
    if (value >= 70) {
        console.log(`${value} : Lulus`)
    } else {
        console.log(`${value} : Tidak Lulus`)
    }
}