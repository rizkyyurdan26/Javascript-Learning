const buronan = "Joker";
const antrianOrang = ["Bruce", "Clark", "Joker", "Diana", "Barry"];

// Tulis Loop-mu di sini...
// for biasa
for (const [i, val] of antrianOrang.entries()){
    console.log(`${i}: ${val}`)
    if (val === buronan){
        console.log(`Bingo, buronan tertangkap bernama: ${val} di antrian ke-${i}`)
        break
    }
}

// Arrow function
console.log('\nUsing For Each')
antrianOrang.forEach((val, i) => {
    if (val === buronan){
        console.log(`Bingo, buronan tertangkap bernama: ${val} di antrian ke-${i}`)
    }

})