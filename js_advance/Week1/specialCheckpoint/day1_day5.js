const pelamar = [
    { id: 1, nama: "Ayla", nilaiUjian: 85, pengalamanTahun: 0 },
    { id: 2, nama: "Bimo", nilaiUjian: 60, pengalamanTahun: 2 },
    { id: 3, nama: "Dika", nilaiUjian: 90, pengalamanTahun: 3 },
    { id: 4, nama: "Sari", nilaiUjian: 0, pengalamanTahun: 5 } // Perhatikan nilainya 0
];

const filterKandidat = (data) => {
    let lulus = []
    // let umumkan = []
    let keterangan = null

    for (const [i, val] of data.entries()){
        console.log(`Peserta ke-${i+1}`)
        console.log('Nama: '+val.nama)
        console.log('Nilai: '+val.nilaiUjian)
        console.log('Pengalaman: '+val.pengalamanTahun+' Tahun')
        if (!val.nilaiUjian){
            keterangan = 'Gagal, Pengalaman harus ada\n'
        } else if (val.nilaiUjian >= 80 || val.pengalamanTahun >=2){
            keterangan = 'Lolos\n'
            lulus.push(val)
        }
        console.log('Keterangan: '+keterangan)
    }

    data.push({ id: 5, nama: "Bos Kecil", nilaiUjian: 0, pengalamanTahun: 0 })

    lulus.unshift(data[4])

    const umumkan = lulus.map(val => val.nama)

    return {lulus, umumkan}
}

const {lulus, umumkan} = filterKandidat(pelamar)
console.log('Detail data:',lulus)
console.log('Public data:',umumkan)

// Instruksi & Aturan Logika (Kerjakan secara berurutan):

// (Fungsi & Scope): Buat sebuah Arrow Function bernama filterKandidat yang menerima 1 parameter (yaitu array data pelamar).

// (Variabel & Memori): Di dalam fungsi tersebut, buat sebuah array kosong baru untuk menampung kandidat yang lolos.

// (Looping): Lakukan perulangan (for atau for...of) untuk membedah data pelamar satu per satu.

// (Kondisional & Truthy/Falsy): Terapkan logika penyaringan ini (Hati-hati dengan urutan Top-to-Bottom):

// Jika nilaiUjian bernilai Falsy (seperti kasus Sari yang mendapat 0), pelamar langsung GAGAL (tidak dimasukkan ke array lolos), tidak peduli berapa pun pengalaman kerjanya.

// Jika tidak Falsy, cek apakah nilaiUjian minimal 80 ATAU pengalamanTahun minimal 2. Jika memenuhi salah satu saja, masukkan pelamar tersebut ke array lolos menggunakan method array yang tepat.

// (Manipulasi Array Ekstra): Setelah perulangan selesai, HRD mendapat titipan anak direktur. Masukkan object pelamar baru ini: { id: 5, nama: "Bos Kecil", nilaiUjian: 100, pengalamanTahun: 0 } ke posisi paling depan (kiri) dari array pelamar yang lolos tadi.

// (Return): Kembalikan array pelamar lolos tersebut sebagai hasil akhir fungsi.