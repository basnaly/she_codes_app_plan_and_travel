export const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
export const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const config = () => ({
    headers: { 'x-access-token': sessionStorage.getItem('authToken') }
});

export default config;