const riwayatTransaksi = [
  { nama: "Andi", nominal: 50000, status: "sukses" },
  { nama: "Budi", nominal: 150000, status: "pending" },
  { nama: "Andi", nominal: 100000, status: "sukses" },
  { nama: "Citra", nominal: 75000, status: "sukses" },
  { nama: "Budi", nominal: 50000, status: "sukses" },
  { nama: "Andi", nominal: 20000, status: "gagal" },
];

function rekapPendapatanPerUser(data) {
  // TULIS KODEMU DI SINI
  const total = data
    .filter((p) => p.status.toLowerCase() === "sukses")
    .reduce((acc, {nama, nominal}) => {
        acc[nama] = (acc[nama] || 0) + nominal
        return acc
    }, {})
  return total;
}

console.log(rekapPendapatanPerUser(riwayatTransaksi));
/* Ekspektasi Output berupa Object:
{
  Andi: 150000,
  Citra: 75000,
  Budi: 50000
}
(Penjelasan: 
 - Andi punya 3 transaksi, tapi yang 'sukses' cuma 50rb + 100rb. 
 - Budi punya 2 transaksi, yang 'sukses' cuma 50rb.
 - Outputnya bukan lagi angka tunggal, melainkan sebuah Object!)
*/
