const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller')
const { body } = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email '),
    body('fullname.firstname').isLength({min: 3}).withMessage('Firstname must be at least 3 characters long.'),
    body('password').isLength({min: 3}).withMessage('Password must be at least 3 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Vehicle color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Vehicle plate must be atleast 3 characters'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Vehicle capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
)

module.exports = router;