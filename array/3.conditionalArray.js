const fruits = ['semangka', 'apel', 'melon', 'jeruk']

const item = 'melon'
const checkingArr = fruits.includes(item)

if (checkingArr) {
    const checkPosition = fruits.indexOf(item)
    console.log(`Semangka terdapat di dalam array fruit, berada di index ke: ${checkPosition}`)
} else {
    console.log(`buah ${checkingArr} tidak berada di dalam array fruits`)
}
