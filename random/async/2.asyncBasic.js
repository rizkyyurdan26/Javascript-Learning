function satu(){
    console.log('Satu')
}

function dua(){
    console.log('Function 2 Process...')
    setTimeout(() => {
        console.log('Dua')
    }, 100)
}


function tiga(){
    console.log('Tiga')
}

satu()
dua()
tiga()

// Cara Kerja:
// - Jalankan fungsi pertama
// - jadwalkan fungsi kedua
// - jalankan fungsi ketika
// - munculkan hasil fungsi kedua setelah 1 detik