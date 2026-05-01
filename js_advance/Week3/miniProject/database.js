export const dataPesanan = [
  { id: 1, meja: 5, menu: ["Nasi Goreng", "Es Teh"], totalHarga: 40000, status: "selesai" },
  { id: 2, meja: 2, menu: ["Ayam Bakar", "Jeruk Panas"], totalHarga: 60000, status: "pending" },
  { id: 3, meja: 8, menu: ["Mie Goreng Spesial"], totalHarga: 35000, status: "selesai" }
];

export default function hitungPajak(harga){
    return harga * 0.1
}