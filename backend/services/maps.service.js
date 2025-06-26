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
