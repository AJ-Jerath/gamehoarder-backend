const express = require('express');
const router = express.Router();

const getGames = require('../controlers/games')

// Games
router.get('/games', getGames);

module.exports = router;