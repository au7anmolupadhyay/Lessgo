const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator')

module.exports.createRide = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { pickup, destination, vehicleType } = req.body;

    console.log("RIDE CONTROLLER:", req.body);

    try{
        const ride = await rideService.createRide(req.user._id, { pickup, destination, vehicleType });
        return res.status(200).json(ride);
    }catch(err){
        return res.status(400).json({message: "message from ride controller: " + err.message});
    }
};