const keranjang = [
    { produk: "Kaos", harga: 100000 },
    { produk: "Celana", harga: 200000 },
    { produk: "Topi", harga: 50000 }
];

const namaProduct = keranjang.map(item => item.produk)

console.log(namaProduct)


for (i of namaProduct){
    console.log(i)
}