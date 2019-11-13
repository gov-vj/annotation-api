const express = require('express');
const {save, fetch} = require('../controllers/token');

const router = express.Router();

router.post('/save/:tokenType', save);
router.get('/fetch/:tokenType', fetch);

module.exports = router;