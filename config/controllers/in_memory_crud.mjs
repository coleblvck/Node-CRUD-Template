
// in-memory storage
let items = [];

// Create
export const createItem =  (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
};

// Read
export const readItems = (req, res) => {
    res.json(items)
};

// Update
export const updateItem = (req, res) => {
    const itemID = parseInt(req.params.id);
    const item = items.find(i => i.id === itemID);
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).send('item not found');
    }
};

// Delete
export const deleteItem = (req, res) => {
    const itemID = parseInt(req.params.id);
    items = items.filter(i => i.id !== itemID);
    res.status(204).send();
};

