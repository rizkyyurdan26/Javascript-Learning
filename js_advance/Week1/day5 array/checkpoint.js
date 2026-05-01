const keranjangBelanja = [
    { idProduk: "P01", nama: "Kemeja", harga: 150000, qty: 2 },
    { idProduk: "P02", nama: "Sepatu", harga: 300000, qty: 1 },
    { idProduk: "P03", nama: "Tas", harga: 250000, qty: 1 }
];

keranjangBelanja.splice(1,1)
console.log(keranjangBelanja)

keranjangBelanja[0].qty = 3
console.log(keranjangBelanja)

keranjangBelanja.push({ idProduk: "P04", nama: "Topi", harga: 50000, qty: 1})
console.log(keranjangBelanja)

keranjangBelanja.splice(2, 0, {idProduk: "P00", nama: "Kaus", harga: 50000, qty: 2})
console.log(keranjangBelanja)

keranjangBelanja.splice()