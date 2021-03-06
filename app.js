const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const indexRoute = require('./routes/index.js');
const translateRoute = require('./routes/translate.js');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());


app.use('/', indexRoute);
app.use('/translate', translateRoute);

///Error handling
app.use((req,res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.send('404');
        return;
    }

    if (req.accepts('json')) {
        res.send({error: 'niet gevonden'});
        return;
    }
    res.type('txt').send('Not found');
});

app.listen(3000, () => {
    console.log("running on port 3000");
});

module.exports = app;