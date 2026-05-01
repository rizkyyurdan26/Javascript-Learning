const databaseBuku = [
    { id: "B01", judul: "Atomic Habits", harga: 100000 },
    { id: "B02", judul: "Filosofi Teras", harga: 80000 },
    { id: "B03", judul: "Sapiens", harga: 120000 }
];

const mesinKasir = {
    keranjang: [],
    data: [...databaseBuku],

    tambahPesanan: function(idBuku){
        const filterId = this.data.find(p => p.id === idBuku)
        if (filterId){
            this.keranjang.push(filterId)
            
            console.log(`Buku ${filterId.judul} berhasil dimasukkan ke keranjang`)
        } else{
            console.log(`Error: Buku dengan ID ${idBuku} tidak ditemukan!`)
        }
    },

    bayar: function(uangTunai){
        let totalHarga= 0


        for (const val of this.keranjang){
            totalHarga += val.harga
        }
        
        // console.log(totalHarga)
        if(uangTunai < totalHarga){
            console.log(`\nMaaf, uang anda kurang Rp. ${totalHarga - uangTunai}`)
        } else{
            const judulBuku = this.keranjang.map(p => p.judul)
            console.log('\n--- STRUK PEMBELIAN ---')
            console.log(`Buku dibeli: ${judulBuku}`)
            console.log(`Total: Rp. ${totalHarga}\nBayar: Rp. ${uangTunai}\nKembalian: Rp. ${uangTunai-totalHarga}\nTerima kasih!`)

            this.keranjang = []
        }

        // console.log(this.keranjang)
    }

}

mesinKasir.tambahPesanan('B01')
mesinKasir.tambahPesanan('B02')
mesinKasir.bayar(180000)