// 1. Object pakai function biasa
const KarakterGame = {
    staminaKarakter: 100,
    serangMusuh: 10,
    sisaNyawa: null,

    kalahkanKarakter: function(tambahStamina){
        this.sisaNyawa = this.staminaKarakter - (this.serangMusuh + tambahStamina)
        console.log(`Sisa nyawa karakter: ${this.sisaNyawa}`)
        if (this.sisaNyawa > 0){
            console.log(`Kamu harus menambah total stamina ${this.staminaKarakter - this.serangMusuh} untuk menang`)
        } else {
            console.log('Selamat kamu menang')
        }
    }
}

KarakterGame.kalahkanKarakter(90)

// 2. filter pakai arrow
const arr = [10, 15, 20, 25, 30]

const filterArr = arr.filter(a => a%2 === 0)

console.log(filterArr)
