const button = document.getElementById('btn')
const button2 = document.getElementById('btn2')

const oriText = 'Save'

const clickProcess = () => {
    console.log('Button Clicked')
    alert('Button Clicked')
}

function mouseOver(){
    button.innerHTML = 'Mouse Over'
}

function mouseOut(){
    button.textContent = oriText
}

function gantiWarna(){
    console.log('btn2')
    button2.style.backgroundColor = 'aqua'
    button2.style.color = 'white'
    button2.style.border = 'none'
    button2.onmouseover
}