import { app, port } from './config/app/settings.mjs';
import path from 'path';
import { fileURLToPath } from 'url';


// HTML Serve
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

// Run Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});