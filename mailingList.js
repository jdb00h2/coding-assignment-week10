let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('inputFirstName').value;
    row.insertCell(1).innerHTML = document.getElementById('inputLastName').value;
    row.insertCell(2).innerHTML = document.getElementById('inputAddress').value;
    row.insertCell(3).innerHTML = document.getElementById('inputAddress2').value;
    row.insertCell(4).innerHTML = document.getElementById('inputCity').value;
    row.insertCell(5).innerHTML = document.getElementById('inputState').value;
    row.insertCell(6).innerHTML = document.getElementById('inputZip').value;
    let actions = row.insertCell(7);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('inputFirstName').value = '';
    document.getElementById('inputLastName').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputAddress2').value = '';
    document.getElementById('inputCity').value = '';
    document.getElementById('inputState').value = 'Choose...';
    document.getElementById('inputZip').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}