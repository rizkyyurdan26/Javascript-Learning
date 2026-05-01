// Prime
for (let i = 2; i <= 10; i++){
    let prime = true
    console.log('angka: '+i+'\n')

    for (let j=2; j <= i-1; j++){
        console.log('Pembagi: '+j+'\n')
        if (i % j === 0){
            prime = false
            break
        }
    }

    if(prime){
        console.log(i)
    }
}