n = 5
i = 1

while (i <= n){
    console.log(' '.repeat(n-i) + '*'.repeat(i*2-1))
    i++
}

while (n >= 1){
    console.log(' '.repeat(5-n) + '*'.repeat(n*2-1))
    n--
}