const input = document.getElementById('input-list')
const btn = document.getElementById('btn-add')
const list = document.getElementById('list-activity')

btn.addEventListener('click', function() {
    const elementInput = input.value

    const newItem = document.createElement('li')
    
    if (elementInput.trim()){
        newItem.innerText = elementInput
        list.appendChild(newItem)
    } else{
        alert('Fill list')
    }

    input.value = ""

})