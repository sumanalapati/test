var express = require('express');
const fs = require('fs');
var router = express.Router();
var xlsx = require('xlsx');
var _ = require('lodash');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    const workBook = xlsx.readFile(`${__dirname}/reference.xls`);
    const workSheets = workBook.SheetNames;
    const json = xlsx.utils.sheet_to_json(workBook.Sheets[workSheets[0]]);
    const response = [];
    const found = _.find(json, ['EDN', Number(req.params.id)]);
    if(found){
        response.push(found);
    }
    res.send(response);
    next();
});

module.exports = router;
