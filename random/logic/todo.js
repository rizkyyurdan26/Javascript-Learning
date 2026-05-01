let input = document.getElementById('todo')
let btn = document.getElementById('btn')
let container = document.getElementById('container')
let item = document.getElementById('item')

// let todo = []

// function addTodo() {
//     container.innerHTML = ''
    
//     todo.push(input.value)
    
//     for (let i of todo) {
//         container.innerHTML += `<li>${i}</li>`
//     }
    
//     input.value = ''
// }



// USING APPENDCHILD
function addTodo(){
    let item = document.createElement('li')
    item.innerHTML = input.value

    container.appendChild(item)
}