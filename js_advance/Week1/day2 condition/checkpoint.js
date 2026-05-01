let nama = "Bimo";
let tinggi = 165;
let umur = 17;
let bawaSuratSakti = true;

if (bawaSuratSakti){
    console.log("Selamat kamu lulus jalur VIP")
} else if (tinggi >=170 && (umur >= 18 && umur <=25)){
    console.log("Selamat kamu lulus")
} else{
    console.log("Maaf kamu belum lulus")
}

// Pendaftar dipastikan LULUS jika tinggi badannya minimal 170 (cm) DAN umurnya di antara 18 sampai 25 (tahun).

// Pendaftar mendapat jalur KADEPE (Keluarga/Kenalan) dan langsung LULUS jika dia memiliki surat sakti. (Tidak peduli tinggi/umur).

// Selain kondisi di atas, pendaftar GAGAL.