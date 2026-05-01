
for (let i=1; i <= 5; i++){
    console.log(i)
}


// for biasa
for (let i = 1; i <=5; i++){
    let star = ''
    let spasi = ''
    let jumlah = (i * 2 -1)
    let jumlahSpasi = (5 - i)

    for (let j = 1; j <= jumlah; j++){
        star += '*'
    }

    for (let k = 1; k <= jumlahSpasi; k++){
        spasi += ' '
    }

    console.log(spasi+star)
}

console.log('\nDengan repeat \n')
// dengan repeat 
for (let i = 1; i <= 5; i++){
    console.log(' '.repeat(5-i) + '*'.repeat(i * 2 - 1))
}
for (let i = 5; i >= 1; i--){
    console.log(' '.repeat(5-i) + '*'.repeat(i * 2 -1))
}

for (let i=1; i <= 5; i++){
    process.stdout.write(i + ' ')
}
