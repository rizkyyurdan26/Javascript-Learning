function prosesJus(buah, gula){
    let hasil = `Jus ${buah} dengan ${jumlahGula} sendok gula siap!`
    return hasil
}

let pesananSatu = prosesJus("Mangga", 2);
let pesananDua = prosesJus("Alpukat", 0);

console.log(pesananSatu);
console.log(pesananDua);