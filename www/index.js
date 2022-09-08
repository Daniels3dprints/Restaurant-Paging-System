const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '.')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/credits', (req, res) => {
    res.sendFile(`${__dirname}/dist/credits.html`);
});
app.get('/settings', (req, res) => {
    res.sendFile(`${__dirname}/dist/settings.html`);
});
app.listen(80, () => {
    console.log('Application listening on port 80!');
});