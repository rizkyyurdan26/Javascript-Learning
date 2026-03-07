n = 5

for (let i = 1; i <= n; i++){
    console.log('-'.repeat(n-i) + '*'.repeat(i * 2 - 1))
}

for (let i = n; i >= 1; i--){
    console.log('-'.repeat(n-i) + '*'.repeat(i*2-1))
}