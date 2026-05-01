// --- MISI 1: IMPORT MODULES ---
import hitungPajak, { dataPesanan } from "./database.js";

// --- MISI 2: FIND & DESTRUCTURING ---
// 1. Gunakan 'find()' untuk mencari pesanan dengan id: 3 dari 'dataPesanan'.
const cariData = dataPesanan.find((d) => d.id === 3);
console.log(cariData);

// 2. Lakukan Object Destructuring untuk mengambil properti 'meja' dan 'menu' dari hasil pencarian tersebut.
const {
  meja,
  menu: [...makanan],
} = cariData;

// 3. Cetak ke console menggunakan template literals: "Pesanan meja 8 adalah Mie Goreng Spesial" (Gunakan variabel hasil destructuring).
console.log(`Pesanan meja ${meja} adalah ${makanan}`);

// --- MISI 3: FILTER, MAP, & SPREAD ---
// 1. Gunakan 'filter()' untuk mengambil pesanan yang statusnya HANYA "selesai".
// 2. Lakukan chaining (sambung) dengan 'map()' untuk mengubah data pesanan "selesai" tadi.
// 3. Di dalam 'map()', kembalikan object baru menggunakan SPREAD OPERATOR (...) untuk menyalin seluruh properti lama, lalu tambahkan 1 properti baru bernama 'pajak' yang nilainya didapat dari memanggil fungsi 'hitungPajak(totalHarga)'.
// Simpan hasilnya di variabel bernama 'pesananSelesaiBerpajak' dan cetak ke console.
function pesananSelesaiBerpajak(data) {
  const pesananSelesai = data
    .filter((d) => d.status.toLowerCase() === "selesai")
    .map((d) => ({
        ...d,
        pajak: hitungPajak(d.totalHarga)
    }));

  return  pesananSelesai ;
}

console.log(pesananSelesaiBerpajak(dataPesanan));

// --- MISI 4: REST OPERATOR ---
// Buat sebuah fungsi bernama 'tambahPesananBaru'.
// Parameter pertama adalah 'nomorMeja', dan parameter sisanya gunakan REST OPERATOR untuk menampung 'daftarMenu'.
// Fungsi ini wajib mengembalikan kalimat: "Meja X memesan Y menu." (Y adalah jumlah menu yang ada di dalam array rest operator).
// Uji fungsinya dengan console.log(tambahPesananBaru(10, "Sate", "Lontong", "Es Campur"));

function tambahPesananBaru(nomorMeja, ...pesanan){
    return `Meja ${nomorMeja} memesan ${pesanan.length}, yaitu: ${pesanan}`
}

console.log(tambahPesananBaru(10, "Sate", "Lontong", "Es Campur"))
