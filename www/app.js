const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '.')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});
app.get('/credits', (req, res) => {
    res.sendFile(`${__dirname}/credits.html`);
});
app.get('/settings', (req, res) => {
    res.sendFile(`${__dirname}/settings.html`);
});
app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});