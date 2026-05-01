let arr = [10, 5, 8, 20]

// Total Using for
let total = 0

for (let i of arr){
    total += i
}

console.log(total)

// Total Using Reduce
const ttl = arr.reduce((sum, value) => sum + value, 0)
console.log(ttl)

// Total using ForEach
let jml = 0
arr.forEach(num => jml += num)

console.log(jml)