const { log } = require('console');
const express = require('express');
const router = express.Router();
const translate = require('translate-google');

async function translateWordToDutch(word) {
    const response = await translate(word, {from: 'nl', to: 'en'});
    return response;
}

router.get('/:word', (req,res) => {
    translateWordToDutch(req.params.word)
        .then((translatedWord) => {
            res.send({
                EnglishWord: req.params.word.toLowerCase(),
                Dutchword: translatedWord.toLowerCase()
            });
        }).catch(err => console.log(err));
});

module.exports = router;