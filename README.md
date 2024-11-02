# Node.js CRUD Template

## Overview

This Node.js project is one I have written to serve as a "bringing up to speed" template to help me quickly get familiar with the important basics in building web applications using Node.js and Express, should I need to. It aims to refresh my understanding of fundamental concepts/bring me up to speed when preparing for more complex future projects. I have refactored it into some modular blocks (having come from Django, I might have done that with some bias).

## Features

- **CRUD Operations**: Create, Read, Update, and Delete operations on text items.
- **Database Integration**: Uses PostgreSQL for persistent data storage. Though, I have added some simple implementations for SQLite 3 and also a basic in-memory storage which both can be swapped out, if needed, but personally for me: PostgreSQL for the win.
- **Frontend Interface**: Simple HTML, CSS and JavaScript for user interaction.
- **Dynamic Updates**: Automatically updates the UI after CRUD operations.

## Technologies Used

- Node.js
- Express
- PostgreSQL
- HTML/CSS
- JavaScript

## Getting Started

### Prerequisites

- Node.js installed on your machine
- PostgreSQL installed and running

### Installation

1. Clone this repository:
```bash
git clone https://github.com/coleblvck/Node-CRUD-Template.git
cd Node-CRUD-Template
```

2. Install dependencies:
```bash
npm install
```

3. Set up your PostgreSQL database:
   - Create a new database (e.g., `node_crud_example`).
   - Optionally (You probably should), create a user and give it privileges.

4. Update the database configuration in `config/database/postgres.mjs` with your credentials.

5. Start the application:
```bash
node server.mjs
```
   or
```bash
npm run dev-mjs
```

6. Navigate to `http://localhost:3000` in your browser to access the app.

## Usage

You can add, update, and delete items through the web interface. The application dynamically reflects changes made to the database. Files can be modified with minimal effort to achieve completely different results.

## Contributing

This project is a personal template to help me get up to speed. Contributions are welcome if there are any, as I continue to learn and refine my skills.

## License

This project is licensed under the MIT License.