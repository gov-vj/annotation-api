const fs = require('fs');
const path = require('path');

exports.save = (req, res, next) => {
    const tokenPath = path.join(__dirname, '..', 'data', `token-${req.params.tokenType}.json`);
    fs.readFile(tokenPath, 'utf8', (err, data) => {
        if(!data) {
            data = '[]';
        }

        let success = true;
        const jsonData = JSON.stringify([req.body, ...JSON.parse(data)]);
        fs.writeFile(tokenPath, jsonData, 'utf-8', err => {
            if (err) {
                success = false;
                console.log(err);
            }
        });
        res.json({success});
    });
};

exports.fetch = (req, res, next) => {
    const tokenPath = path.join(__dirname, '..', 'data', `token-${req.params.tokenType}.json`);
    fs.readFile(tokenPath, 'utf8', (err, data) => {
        if(!data) {
            res.json('[]');
            return;
        }

        const jsonData = JSON.parse(data);
        const id = req.params.historyId === 'current' ? 0 : jsonData.findIndex(({historyId}) => {
            return historyId === +req.params.historyId
        });
        res.json(jsonData[id]);
    });
};

exports.fetchHistory = (req, res, next) => {
    const tokenPath = path.join(__dirname, '..', 'data', `token-${req.params.tokenType}.json`);
    fs.readFile(tokenPath, 'utf8', (err, data) => {
        if(!data) {
            data = '[]';
        }

        const jsonData = JSON.parse(data).map(({historyId}) => historyId);
        res.json(jsonData);
    });
};