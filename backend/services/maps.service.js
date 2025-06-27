const axios = require('axios');
require('dotenv').config();

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    if (!apiKey) throw new Error('Google Maps API key is missing in environment variables');
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log('Google Maps API response:', response.data); // Debug log
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(`Unable to fetch coordinates: ${response.data.status} - ${response.data.error_message || 'No error message'}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
};


module.exports.getDistanceTime = async(origin, destination) => {
    if(!origin || !destination){
        throw new Error('Origin and Destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            const rows = response.data.rows;
            if (!rows || !Array.isArray(rows) || rows.length === 0) {
                throw new Error('No rows returned from Google Maps API');
            }
            const elements = rows[0].elements;
            if (!elements || !Array.isArray(elements) || elements.length === 0) {
                throw new Error('No elements returned from Google Maps API');
            }
            if(elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No routes found');
            }

            return elements[0];
        }
        else{
            throw new Error('Unable to fetch distance and time');
        }

    }catch(error){
        console.error(error);
        throw err;
    }
}