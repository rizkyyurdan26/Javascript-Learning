i = 1

while (i <= 2){
    console.log(i)
    i++
}

let nyawa = 100
let serangan = 20
let ronde = 1

while (nyawa > 0){
    console.log('Ronde: '+ronde+' Damage: '+ serangan)
    nyawa = nyawa-serangan
    ronde++

    console.log('Sisa Nyawa: '+nyawa)
}
