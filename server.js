require('./server/config/database');
const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const bp = require('body-parser');
const router = require('./server/routes');
app.use(express.urlencoded({extended: true}));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(express.static( path.join(__dirname, './public/dist/public')));
app.use(session({
    secret: '1zho5sq7vkr76rlb',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(router);

app.listen(8000, () => console.log('listening on port 8000'));
