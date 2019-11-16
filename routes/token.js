const express = require('express');
const {save, fetch, fetchHistory} = require('../controllers/token');

const router = express.Router();

router.post('/save/:tokenType', save);
router.get('/fetch/:tokenType/history', fetchHistory);
router.get('/fetch/:tokenType/:historyId', fetch);

module.exports = router;