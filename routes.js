const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/login', (req, res) => {
    res.render('login.ejs');
});
/*
router.get('*', (req, res) => {
    res.end('404 Not Found');
});
*/
module.exports = router;