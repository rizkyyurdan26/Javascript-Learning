// Function banyak digunakan untuk global, seperti helper, usable function

let harga = 1500000

function rupiah(harga){
    return `Rp. ${harga.toLocaleString('id-ID')}`
}

console.log(rupiah(harga))

// Membuat method di dalam object

const keranjangBelanja = {
    pemilik : "Bimo",
    total: 50000,

    cetakStruck: function(){
        console.log(`Pemilik: ${this.pemilik}, total harga: ${this.harga}`)
    }
}

keranjangBelanja.cetakStruck()