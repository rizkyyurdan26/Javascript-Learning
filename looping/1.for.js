// STRUCKTUR
// for (let start;stop;step)

// Tanpa let maka akan membuat variabel global, bisa di return diluar loop
for (i = 1; i <= 5; i++){
    // console.log(i)
}

// console.log(i)

// Yang benar itu dengan let
for (let j = 1; j <= 5; j++){
    console.log(j)
}
// ini akan undefine
// console.log(j)
