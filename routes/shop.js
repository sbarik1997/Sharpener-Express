const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');


router.get('/shop',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;