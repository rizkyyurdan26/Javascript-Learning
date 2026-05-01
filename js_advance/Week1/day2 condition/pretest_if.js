// 1. Ini ceritanya data asli yang ada di Database (pakai Object)
const databaseUser = {
  username: "budi_gaming",
  password: "rahasia123",
  role: "admin"
};

// 2. Ini ceritanya data yang diketik oleh user di form login halaman web
let inputUsername = "budi_gaming";
let inputPassword = "rahasia123";

// --- TUGASMU MULAI DARI SINI ---
// Buatlah logika (if / else) dengan aturan berikut:

if(!inputUsername.trim() || !inputPassword.trim()){
    console.log("Fill all data")
} else{
    if (inputUsername === databaseUser.username && inputPassword === databaseUser.password){
        console.log('Login berhasil, Selamat datang')
        if (databaseUser.role === 'admin'){
            console.log("Halo bos Admin, fitur rahasia dibuka")
        } 
    } else if (inputUsername === databaseUser.username && inputPassword !== databaseUser.password){
        console.log("Password kamu salah, coba lagi")
    } else {
        console.log("Akun tidak ditemukan")
    }
}


// Aturan 1: Jika username DAN password cocok dengan database, 
//           keluarkan console.log("Login Berhasil! Selamat datang.")
// Aturan 2: Namun (di dalam Aturan 1), JIKA dia berhasil login DAN role-nya adalah "admin", 
//           tambahkan juga console.log("Halo Bos Admin, fitur rahasia dibuka!")
// Aturan 3: Jika username cocok, TAPI password salah, 
//           keluarkan console.log("Password kamu salah, coba lagi.")
// Aturan 4: Jika username tidak cocok sama sekali dengan database, 
//           keluarkan console.log("Akun tidak ditemukan!")