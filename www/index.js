const path = require('path');
const express = require('express');
const app = express();

const port = 3000;
const host = 'localhost';

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
app.get('/readConfig.js', (req, res) => {
    res.sendFile(`${__dirname}/dist/readConfig.js`);
});
app.get('/pagerTest.js', (req, res) => {
    res.sendFile(`${__dirname}/dist/pagerTest.js`);
});
app.get('/pagerController.js', (req, res) => {
    res.sendFile(`${__dirname}/dist/pagerController.js`);
});
app.get('/restartServer.js', (req, res) => {
    res.sendFile(`${__dirname}/dist/restartServer.js`);
});
app.listen(port, () => {
    console.log('Application listening on http://${host}:${port}');
});