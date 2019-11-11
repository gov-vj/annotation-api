const express = require('express');
const bodyParser = require('body-parser');
const contentRouter = require('./routes/content');
const tokenRouter = require('./routes/token');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/content', contentRouter);
app.use('/token', tokenRouter);

app.listen(8080);