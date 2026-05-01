function hallo(callback) {
    console.log('Jalankan ini dulu')

    callback()
}

hallo(() => {
    console.log('Baru jalankan yang ini')
})