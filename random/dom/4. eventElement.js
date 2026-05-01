const btn = document.getElementById('btn')
const bdy = document.body
let isi

function mouseOver(){
    isi = document.createElement('p')
    isi.textContent = 'Mouse Over'
    bdy.append(isi)
}

function mouseOut(){
    if (isi){
        isi.remove()
    }
}

function btnClick(){
    if (btn.style.backgroundColor === ''){
        btn.style.backgroundColor = 'aqua'
        btn.style.border = 'none'
    } else {
        btn.style.backgroundColor = ''
    }
}