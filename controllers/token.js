const fs = require('fs');
const path = require('path');

exports.save = (req, res, next) => {
    const tokenPath = path.join(__dirname, '..', 'data', 'token.json');
    let success = true;
    fs.writeFile(tokenPath, JSON.stringify(req.body), 'utf-8', err => {
        if (err) {
            success = false;
            console.log(err);
        }
    });
    res.json({success});
};

exports.fetch = (req, res, next) => {
    const tokenPath = path.join(__dirname, '..', 'data', 'token.json');
    fs.readFile(tokenPath, 'utf8', (err, data) => {
        if(!data) {
            data = '{}';
        }

        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
};