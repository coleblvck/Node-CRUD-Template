import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import itemsRouter from '../routes/items.mjs';
import path from 'path';
import { fileURLToPath } from 'url';



// Expressly instantiating an express app   
export const app = express();
export const port = 3001;


// Middlewares
app.use(cors()); // Allow cross-origin requests... because... of cors we have to...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); // For serving static files from public directory
app.use('/items', itemsRouter);