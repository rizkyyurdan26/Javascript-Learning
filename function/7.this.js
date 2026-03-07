const user = {
    nama : 'Budi',
    sayHello: function(){
        console.log('Halo', this.nama)
    }
}

user.sayHello()