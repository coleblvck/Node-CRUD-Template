const form = document.getElementById('item-form');
const itemList = document.getElementById('item-list');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const res = await fetch('/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: itemName })
    });
    const newItem = await res.json();
    addItemToList(newItem);
    form.reset();
});

// Load items from the server
async function loadItems() {
    itemList.innerHTML = ''; // Clear the current list
    const res = await fetch('/items');
    const items = await res.json();
    items.forEach(addItemToList);
}

// Add item to list with update and delete functionality
function addItemToList(item) {
    const li = document.createElement('li');
    li.classList.add('list-item')
    li.textContent = item.name;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('list-item-button-div');

    // Create an update button
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', () => updateItem(item.id));

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteItem(item.id));

    // Append buttons to the list item
    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(deleteButton);
    li.appendChild(buttonsDiv);
    itemList.appendChild(li);
}

// Function to update an item
async function updateItem(id) {
    const newName = prompt('Enter the new name for the item:');
    if (newName) {
        const res = await fetch(`/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName })
        });

        if (res.ok) {
            // Reload the items to reflect changes
            loadItems();
        } else {
            alert('Failed to update item.');
        }
    }
}

// Function to delete an item
async function deleteItem(id) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
        const res = await fetch(`/items/${id}`, {
            method: 'DELETE'
        });

        if (res.ok) {
            // Reload the items to reflect changes
            loadItems();
        } else {
            alert('Failed to delete item.');
        }
    }
}

// Load items when the page is loaded
loadItems();