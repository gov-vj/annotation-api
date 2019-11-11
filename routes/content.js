const express = require('express');
const {getContent} = require('../controllers/content');

const router = express.Router();

router.get('/fetch', getContent);

module.exports = router;