function hallo(callback){
    setTimeout(() => {
        console.log('Data dari server')

        callback()
    }, 500);
}

hallo(() => {
    console.log("Data diproses")
})