import { insertDBItem, getDBItems, updateDBItem, deleteDBItem } from '../database/postgres.mjs';

// Create
export const createItem = async (req, res) => {
    try {
        const newItem = await insertDBItem(req.body.name);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Read
export const readItems = async (req, res) => {
    try {
        const items = await getDBItems();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update
export const updateItem = async (req, res) => {
    try {
        const updatedItem = await updateDBItem(req.params.id, req.body.name);
        if (!updatedItem) {
            return res.status(404).send('Item not found');
        }
        res.json(updatedItem);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Delete
export const deleteItem = async (req, res) => {
    try {
        await deleteDBItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(404).send('Item not found');
    }
};