const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Addition endpoint
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input numbers');
    }
    res.json({ result: num1 + num2 });
});

// Subtraction endpoint
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input numbers');
    }
    res.json({ result: num1 - num2 });
});

// Multiplication endpoint
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input numbers');
    }
    res.json({ result: num1 * num2 });
});

// Division endpoint
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input numbers');
    }
    if (num2 === 0) {
        return res.status(400).send('Division by zero error');
    }
    res.json({ result: num1 / num2 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
