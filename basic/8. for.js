for (let i = 0; i < 5; i++) {
    console.log(i)
}

for (let i = 0; i < 3; i++){
    console.log(i)
}

const arr = ['a', 'b', 'c']

for (i of arr) {
    console.log(i)
}

arr.forEach((item, index) => {
    console.log(`index ke ${index}: ${item}`)
})