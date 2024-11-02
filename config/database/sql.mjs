// Do not forget to install SQLite
import sqlite3 from 'sqlite3';

const DBSOURCE = "db.sqlite"; // Database file path

// Create a SQLite database
const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('Connected to the SQLite database.');

    // Create the items table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
});

// Function to insert an item
export const insertItem = (name) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO items (name) VALUES (?)';
        db.run(sql, [name], function(err) {
            if (err) {
                return reject(err);
            }
            resolve({ id: this.lastID, name });
        });
    });
};

// Function to get all items
export const getItems = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM items';
        db.all(sql, [], (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
};

// Function to update an item
export const updateItem = (id, name) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE items SET name = ? WHERE id = ?';
        db.run(sql, [name, id], function(err) {
            if (err) {
                return reject(err);
            }
            resolve({ id, name });
        });
    });
};

// Function to delete an item
export const deleteItem = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM items WHERE id = ?';
        db.run(sql, id, function(err) {
            if (err) {
                return reject(err);
            }
            resolve({ id });
        });
    });
};

// Export the database object
export default db;