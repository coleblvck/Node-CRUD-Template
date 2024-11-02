import express from 'express';
import { createItem, readItems, updateItem, deleteItem } from '../controllers/crud.mjs';

const router = express.Router();


// Crud Operations
router.post('/', createItem);
router.get('/', readItems);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;