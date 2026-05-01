const profilSiswa = {
  id: 123,
  dataPribadi: {
    namaLengkap: "Dewi Lestari",
    asalKota: "Bandung"
  }
};

const nilaiUjian = [85, 90, 95]; 

function cetakRapor(siswa, nilai) {
  const {dataPribadi: {namaLengkap, asalKota}} = siswa
  const [, fisika, biologi] = nilai

  return `Siswa bernama ${namaLengkap} dari ${asalKota} mendapatkan nilai Fisika ${fisika} dan Biologi ${biologi}`
}

console.log(cetakRapor(profilSiswa, nilaiUjian));
// Ekspektasi Output mutlak: "Siswa bernama Dewi Lestari dari Bandung mendapatkan nilai Fisika 90 dan Biologi 95"