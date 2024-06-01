const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/research', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'research.html'));
});

app.get('/publications', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'publication.html'));
});

app.get('/teaching', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'teaching.html'));
});

app.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'student.html'));
});

app.get('/biography', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'biography.html'));
});

app.get('/awards', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'award.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
