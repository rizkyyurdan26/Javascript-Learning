const tarif = 1000
let saldo = 120

if (saldo >= tarif){
    console.log('Palang terbuka, silahkan jalan')
    saldo = saldo - tarif
    console.log(`Saldo Akhir: ${saldo}`)
} else {
    console.log("Saldo tidak cukup, silahkan isi ulang")
}