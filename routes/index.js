const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('Hi welkom bij mijn translate free api');
})

module.exports = router;