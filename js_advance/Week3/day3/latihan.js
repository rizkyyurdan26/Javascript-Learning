const daftarBuku = [
  { id: 101, judul: "Belajar JS", tebal: 300, dipinjam: false },
  { id: 102, judul: "Mastering React", tebal: 500, dipinjam: true },
  { id: 103, judul: "CSS Magic", tebal: 150, dipinjam: false },
  { id: 104, judul: "NodeJS Backend", tebal: 400, dipinjam: true }
];

// --- MISI 1: Gunakan map() ---
// Buat variabel 'katalogJudul' yang isinya HANYA array string dari judul bukunya saja.
// Ekspektasi Output: ["Belajar JS", "Mastering React", "CSS Magic", "NodeJS Backend"]
const katalogJudul = daftarBuku.map(d => d.judul)
console.log(katalogJudul)

// --- MISI 2: Gunakan find() ---
// Buat variabel 'bukuDicari' untuk menemukan object buku secara utuh yang memiliki id: 103.
const bukuDicari = daftarBuku.find(d => d.id === 103)
console.log(bukuDicari)

// --- MISI 3: Gunakan every() ---
// Buat variabel 'cekKetebalan' yang mengecek apakah SEMUA buku di daftar memiliki tebal di atas 100 halaman (menghasilkan true/false).
const cekKetebalan = daftarBuku.every(d => d.tebal > 100)
console.log(cekKetebalan)