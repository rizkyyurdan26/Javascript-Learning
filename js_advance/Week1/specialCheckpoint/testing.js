// No 1
const keranjang = [
  { nama: "Buku", harga: 50000, stok: true },
  { nama: "Pensil", harga: 10000, stok: false },
  { nama: "Tas", harga: 120000, stok: true },
  { nama: "Penghapus", harga: 5000, stok: true },
];

function hitungTotalBelanja(dataBelanja) {
  const belanja = dataBelanja
    .filter((p) => p.stok === true)
    .reduce((acc, curr) => acc + curr.harga, 0);

  if (belanja > 100000) {
    return belanja - belanja * 0.1;
  } else {
    return belanja;
  }
}

console.log(hitungTotalBelanja(keranjang));

// No 2
function cariKataTerpanjang(kalimat) {
  const text = kalimat.split(" ");
  let panjang = kalimat[0];
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > panjang.length) {
      panjang = text[i];
    }
  }
  return panjang;
}

console.log(
  cariKataTerpanjang("Saya sedang belajar memprogram menggunakan javascript"),
);


const cariKataTerpanjang2 = (kalimat) => {
    const text = kalimat.split(" ").reduce((acc, curr) => curr.length > acc.length ? curr : acc, "")
    return text
}
console.log(
  cariKataTerpanjang2("Saya sedang belajar memprogram menggunakan javascript"),
);
