const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const crypto = require('crypto');

async function getFare(pickup, destination, vehicleType){
    if(!pickup || !destination){
        throw new Error('Pickup and Destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);
    
    // Base fare rates (in currency units per km)
    const baseRates = {
        'auto': 15,
        'car': 25,
        'motorbike': 10
    };

    // Time rates (in currency units per minute)
    const timeRates = {
        'auto': 2,
        'car': 3,
        'motorbike': 1.5
    };

    // Minimum fare for each vehicle type
    const minimumFares = {
        'auto': 30,
        'car': 50,
        'motorbike': 20
    };

    if (!baseRates[vehicleType]) {
        throw new Error('Invalid vehicle type. Supported types: auto, car, motorbike');
    }

    const distanceInKm = distanceTime.distance.value / 1000;
    const durationInMin = distanceTime.duration.value / 60;

    // Calculate fare based on distance and time
    const distanceFare = distanceInKm * baseRates[vehicleType];
    const timeFare = durationInMin * timeRates[vehicleType];
    
    let totalFare = distanceFare + timeFare;

    // Apply minimum fare if calculated fare is less
    if (totalFare < minimumFares[vehicleType]) {
        totalFare = minimumFares[vehicleType];
    }

    // Add convenience fee (5% of total fare)
    const convenienceFee = totalFare * 0.05;
    totalFare += convenienceFee;

    return {
        distance: distanceTime.distance,
        duration: distanceTime.duration,
        baseFare: distanceFare + timeFare,
        convenienceFee: convenienceFee,
        totalFare: Math.round(totalFare),
        currency: 'INR'
    };
}

function getOtp(num){
    const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10,num)).toString();
    return otp;
}

module.exports.createRide = async(user, {pickup, destination, vehicleType})=>{
    if(!pickup || !destination || !vehicleType || !user){
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination, vehicleType);
    console.log("FARE:", fare);
    
    const ride = await rideModel.create({
        pickup,
        destination,
        vehicleType,
        user,
        fare: fare.totalFare,
        status: 'pending',
        otp: getOtp(4)
    });

    return ride;
}

module.exports.getFare = getFare;