let kata = 'programing'

let vocal = ['a', 'i', 'u', 'e', 'o']
let jumlah = 0

for (let k of kata){

    if (vocal.includes(k)){
        jumlah += 1
    }
}

console.log('Total Huruf Vocal', jumlah)