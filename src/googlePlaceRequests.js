import axios from 'axios';

export const placesRequest = async (location) => {
    const apiKey = 'AIzaSyBD3HYqPJ_tej9idod3ZiH-WnzmfchWCx8';
    const locationString = location[0] + ',' + location[1];
    const placesApiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locationString}&radius=1000&type=bar&key=${apiKey}`;

    try {
        const res = await axios.get(placesApiUrl)
        console.info('Successfully fetched nearby locations from Google')
        return res.data;
    } catch (e) {
        console.error('Error fetching data from Google Places API:', e);
    }
}