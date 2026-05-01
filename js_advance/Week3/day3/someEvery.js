const nilai = [80, 90, 60, 75];

// some (true all false dari ketentuan data)
const remed = nilai.some(n => n <=70)
console.log(remed)

// every (true or false dari semua data)
const lulus = nilai.every(n => n >=70)
console.log(lulus)