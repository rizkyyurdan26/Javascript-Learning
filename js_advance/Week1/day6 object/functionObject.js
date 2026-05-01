const dompet = {
    pemilik : 'Bimo',
    saldo : 1000000,

    setorUang: function(jumlah){
        this.saldo = this.saldo + jumlah
        return `Berhasil setor Rp. ${jumlah.toLocaleString('id-ID')}, sisa saldo = ${this.saldo.toLocaleString('id-ID')}`
    }
}

console.log(dompet.setorUang(100000))