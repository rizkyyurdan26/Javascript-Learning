let umur = 21
let member = false
let relasi = false

if (umur >= 21 && member === true){
    console.log("Silahkan masuk")
} else if (member === true || relasi === true){
    console.log("Silahkan masuk VIP")
} else {
    console.log("Dilarang Masuk")
}