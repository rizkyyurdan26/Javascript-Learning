// Array berisi data daya 5 buah baterai dari pabrik
const kapasitasBaterai = [80, 45, 100, 50, 10]; 

// Clue: Untuk mengetahui seberapa panjang sebuah array, kamu bisa menggunakan properti .length
// Contoh: kapasitasBaterai.length nilainya adalah 5

for (let i = 0; i < kapasitasBaterai.length; i++) {

    // 1. Ambil baterai satu per satu berdasarkan indeksnya (i)
    let bateraiSaatIni = kapasitasBaterai[i];
    // 2. TULIS LOGIKA IF/ELSE MU DI SINI:

    if (bateraiSaatIni > 50){
        console.log(`Baterai ke ${i} Lolos (Daya: ${bateraiSaatIni})`)
    } else {
        console.log(`Baterai ke-${i} Dibuang (Daya: ${bateraiSaatIni})`)
    }

    // Jika bateraiSaatIni lebih dari 50, console.log("Baterai ke-" + i + " Lolos (Daya: " + bateraiSaatIni + ")");
    // Jika tidak, console.log("Baterai ke-" + i + " Dibuang (Daya: " + bateraiSaatIni + ")");
    
}

// ==========
// My version

for (const [i, val] of kapasitasBaterai.entries()){
    if (val > 50){
        console.log(`Baterai ke-${i} Lolos (Daya: ${val})`)
    }else{
        console.log(`Baterai ke-${i} Dibuang (Daya: ${val})`)
    }

}