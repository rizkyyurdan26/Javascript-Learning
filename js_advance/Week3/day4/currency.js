function formatRupiah(curr){
    return curr.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
}

export default formatRupiah