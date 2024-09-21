const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// In-memory "database"
let todos = [];

// Route to get all to-dos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Route to add a new to-do
app.post('/todos', (req, res) => {
    const todo = req.body;
    console.log("myTodo",todo);
    todos.push(todo);
    res.json({ message: 'To-do added!', todo });
});

// Route to delete a to-do by index
app.delete('/todos/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
        res.json({ message: 'To-do deleted!' });
    } else {
        res.status(404).json({ message: 'To-do not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
