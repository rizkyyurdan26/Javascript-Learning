const mesinKasir = {
    laciUang: 0,
    strukBelanja: [],

    tambahBarang: function(namaBarang, harga){
        this.strukBelanja.push(`${namaBarang} - ${harga}`)
        this.laciUang += harga
    },

    cetakStruck: function(){
        console.log(this.strukBelanja)
       console.log(`Total Belanja: Rp.${this.laciUang.toLocaleString('id-ID')}`)

        this.laciUang = 0
        this.strukBelanja=[]

    }
    


}

mesinKasir.tambahBarang('Sepatu', 50000)
mesinKasir.tambahBarang('Baju', 10000)
mesinKasir.cetakStruck()