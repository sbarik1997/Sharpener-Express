const path = require('path');

const rootDir = require('../utils/path');

exports.errorPage = (req,res,next) => {
    res.status(404).render('404');
}