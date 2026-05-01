// --- TUGAS 1 ---
const menuUtama = ["Nasi Goreng", "Ayam Bakar"];
const menuMinuman = ["Es Teh", "Kopi"];
// Misi 1: Buat variabel 'daftarMenuGojek' yang menggabungkan menuUtama, menuMinuman, dan tambahkan "Kerupuk" di paling akhir menggunakan SPREAD OPERATOR.
const daftarMenuGojek = [...menuUtama, ...menuMinuman, 'Kerupuk']
console.log(daftarMenuGojek)

// --- TUGAS 2 ---
// Misi 2: Buat sebuah fungsi bernama 'rekapPesanan' yang menerima parameter pertama sebagai nama pelanggan, dan sisa parameternya adalah daftar makanan yang dipesan (jumlah makanannya bebas / tidak menentu).
// Fungsi ini harus mengembalikan string seperti: "Budi memesan 3 item makanan." (Angka 3 didapat dari panjang array pesanan yang dikumpulkan oleh REST OPERATOR).

// TULIS KODEMU DI BAWAH SINI:
function rekapPesanan(pelanggan, ...daftar){
    return `${pelanggan} memesan ${daftar.length} item makanan`
}

console.log(rekapPesanan('Budi', 'Nasi Goreng', 'Mie Ayam', 'Bakso'))