// Do not forget to install Postgres
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'myuser',        // Replace with database username
    host: 'localhost',
    database: 'node_crud_example', // Replace with database name
    password: 'mypassword', // Replace with database password
    port: 5432,
});

// Create the items table if it doesn't exist
const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL
        )
    `;
    await pool.query(query);
};

createTable();

// Function to insert an item
export const insertDBItem = async (name) => {
    const query = 'INSERT INTO items (name) VALUES ($1) RETURNING *';
    const res = await pool.query(query, [name]);
    return res.rows[0];
};

// Function to get all items
export const getDBItems = async () => {
    const query = 'SELECT * FROM items';
    const res = await pool.query(query);
    return res.rows;
};

// Function to update an item
export const updateDBItem = async (id, name) => {
    const query = 'UPDATE items SET name = $1 WHERE id = $2 RETURNING *';
    const res = await pool.query(query, [name, id]);
    return res.rows[0];
};

// Function to delete an item
export const deleteDBItem = async (id) => {
    const query = 'DELETE FROM items WHERE id = $1';
    await pool.query(query, [id]);
};

// Export the pool object
export default pool;