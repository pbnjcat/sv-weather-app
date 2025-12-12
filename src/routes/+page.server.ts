import type { PageServerLoad } from './$types';
import { WEATHER_FORECAST_API_BASE_URL, GEOCODE_BASE_URL } from '$lib/constants';
import type { Coordinates, Weather } from '$lib/types';

export const load: PageServerLoad = async ({ fetch, url }) => {
    const query = url.searchParams.get('location');

    if (!query || query.length < 2) {
        return { results: [] };
    }

    // geocode api
    const geocode = await fetch(`${GEOCODE_BASE_URL}?name=${query}&count=10&language=en&format=json`).then(response => response.json());
    const { latitude, longitude } = geocode.results[0];
    const location: Coordinates = { lat: latitude, lon: longitude };
    // if(!geocode.ok) {
    //     throw new Error("Failed to fetch geocode data");
    // }

    const response = await Promise.all([
        fetch(`${WEATHER_FORECAST_API_BASE_URL}?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,relative_humidity_2m,weather_code`).then(response => response.json()),
    ])

    const results: Weather = response[0];
    console.log(results)
    return {
        results
    };
};

