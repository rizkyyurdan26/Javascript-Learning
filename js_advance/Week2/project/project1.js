const input = document.getElementById("input-list");
const btn = document.getElementById("btn-add");
const tableBody = document.getElementById("table-body");

const dataList = [];
let editId = null;

function render(){
    tableBody.innerHTML = ""

    dataList.forEach((item, index) => {
        const tr = document.createElement('tr')
        const tdNumber = document.createElement('td')
        const tdText = document.createElement('td')
        const btnEdit = document.createElement('button')
        const btnDel = document.createElement('button')

        tdNumber.textContent = index + 1
        tdText.textContent = item.text 

        btnEdit.textContent = 'Edit'
        btnDel.textContent = 'Delete'

        btnDel.addEventListener('click', function() {
            const idx = dataList.findIndex(i => i.id !== item.id)
            if (idx !== -1){
                dataList.splice(idx, 1)
            }
            render()
        })

        btnEdit.addEventListener('click', function() {
            input.value = item.text 
            editId = item.id
            btn.textContent = "Update"
        })

        tr.append(tdNumber, tdText, btnEdit, btnDel)
        tableBody.appendChild(tr)
    })
}

btn.addEventListener('click', function(){
    const val = input.value.trim()
    if(!val) return alert('Fill Data')
    
    if (editId){
        const item = dataList.find(i => i.id === editId)
        if (item) item.text = val

        editId = null
        btn.textContent = 'Add'
    } else {
        dataList.push({
            id: Date.now(),
            text: val
        })
    }

    input.value = ""
    render()
})