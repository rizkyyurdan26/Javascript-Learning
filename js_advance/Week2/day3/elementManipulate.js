const barangNyasar = document.getElementById('barang-nyasar')
barangNyasar.remove()

const keranjang = document.getElementById('keranjang')

const newItem = document.createElement('li')
newItem.innerText = 'Topi'

keranjang.appendChild(newItem)