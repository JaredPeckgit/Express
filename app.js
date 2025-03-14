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
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <h1>Thank you, ${name}!</h1>
            <p>We have received your message:</p>
            <p>Email: ${email}</p>
            <p>Other contact: ${contact}</p>
            <a href="/">Back to Home</a>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});