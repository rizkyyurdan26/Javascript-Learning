const operation = (x,y) => {
    hasil = x+y
    return hasil
}

console.log(operation(6,5))

const operating = (a,b) => {
    kali = a*b
    bagi = a/b

    return {kali, bagi}
}

const result = operating(6,3)
console.log(result)
console.log(result.kali)
console.log(result.bagi)