const express = require('express');
const {save, fetch} = require('../controllers/token');

const router = express.Router();

router.post('/save', save);
router.get('/fetch', fetch);

module.exports = router;