const pengirimanJakarta = [80, 45, 100, 50, 10];
const pengirimanBali = [60, 90, 30, 20];

const filterBateraiLolos = (tujuan) => {
    let bateraiBagus = []

    for (const val of tujuan){
        if (val > 50){
            bateraiBagus.push(val)
        }
    }

    return bateraiBagus
}

console.log(filterBateraiLolos(pengirimanJakarta))
console.log(filterBateraiLolos(pengirimanBali))
