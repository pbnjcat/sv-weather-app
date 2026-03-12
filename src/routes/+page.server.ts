import type { PageServerLoad } from './$types';
import { fetchLocations } from '$lib/services/geocode';
import type { GeocodeLocation } from '$lib/types';
import { parseSearchParams } from '$lib/utils';

export const load: PageServerLoad = async ({ fetch, url }) => {
    const params = url.searchParams;
    const searchRequest = parseSearchParams(params);

    try {
        const geocodeResponse = await fetchLocations(searchRequest, fetch);

        return { geocodeResponse, searchRequest };
    } catch (error) {
        console.error('Error loading data:', error);

        return {
            geocodeResponse: [] as GeocodeLocation[],
            searchRequest,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
};