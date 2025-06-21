const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { getCoordinates } = require('../controllers/maps.controllers');

router.get('/get-coordinates', async (req, res) => {

})

module.exports = router;