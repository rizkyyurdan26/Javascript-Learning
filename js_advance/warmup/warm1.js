const daftarKaryawan = [
  { nama: "Andi", divisi: "IT", gaji: 7000000, statusAktif: true },
  { nama: "Budi", divisi: "HRD", gaji: 5000000, statusAktif: false },
  { nama: "Citra", divisi: "IT", gaji: 8500000, statusAktif: true },
  { nama: "Dewi", divisi: "Finance", gaji: 6000000, statusAktif: true },
  { nama: "Eko", divisi: "IT", gaji: 6500000, statusAktif: false }
];

function hitungTotalGajiIT(data) {
  const gajiIt = data.filter(p => p.divisi.toLowerCase() === 'it' && p.statusAktif).reduce((acc, curr) => acc + curr.gaji, 0)
  return gajiIt
}

console.log(hitungTotalGajiIT(daftarKaryawan));
// Ekspektasi Output: 15500000
// (Penjelasan: Hanya Andi dan Citra yang dihitung. Keduanya divisi IT dan statusnya aktif. 7jt + 8.5jt = 15.5jt. Eko tidak dihitung karena statusAktif-nya false).