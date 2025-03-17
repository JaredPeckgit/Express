const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/submit-contact', (req, res) => {
    const { name, email, contact } = req.query;
    res.send(`<h1>Thank you, ${name}!</h1><p>Email: ${email}</p><p>Contact: ${contact}</p><a href="/">Back</a>`);
});

app.get('/users', (req, res) => {
    const users = ['Alice', 'Bob', 'Charlie'];
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><link rel="stylesheet" href="/styles.css"></head>
        <body>
            <h1>Users</h1>
            <ul>${users.map(user => `<li>${user}</li>`).join('')}</ul>
            <a href="/">Back to Home</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});