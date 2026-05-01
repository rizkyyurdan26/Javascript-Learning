let keranjangBelanja = 1
let totalBelanja = 600000;
let statusMember = "gold"; 
let punyaVoucher = true;
let hariIni = "minggu";

if (!keranjangBelanja){
    console.log("Keranjang kosong, tidak bisa checkout")
} else if (totalBelanja > 1000000 && statusMember.toLocaleLowerCase() === "gold"){
    console.log("Selamat kamu mendapatkan diskon 20%")
} else if (punyaVoucher || totalBelanja >= 500000){
    console.log('Selamat kamu mendapatkan diskon 10%')
} else if (hariIni.toLocaleLowerCase() === 'minggu'){
    console.log("Diskon weekend 5%")
} else {
    console.log("Tidak ada diskon")
}

// Jika keranjang belanja bernilai 0 atau tidak ada (kosong), langsung cetak: "Keranjang kosong, tidak bisa checkout!" (Hint: Gunakan konsep Truthy/Falsy di sini, jangan pakai perbandingan angka).

// Jika total belanja lebih dari Rp 1.000.000 DAN statusnya adalah "Member Gold", maka cetak: "Diskon 20% Applied!".

// Jika total belanja minimal Rp 500.000, ATAU dia punya kode voucher (bernilai true), maka cetak: "Diskon 10% Applied!".

// Khusus hari ini (Hari "Minggu"), jika pelanggan tidak memenuhi syarat diskon 20% maupun 10% di atas, tapi keranjangnya terisi, berikan hiburan dengan mencetak: "Diskon Weekend 5% Applied!".

// Jika tidak ada syarat yang terpenuhi sama sekali, cetak: "Tidak ada diskon."

// Data Uji Coba (Test Case):