const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files

// Mock user data
const validUser = {
    username: 'admin',
    password: 'password'
};

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validUser.username && password === validUser.password) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});